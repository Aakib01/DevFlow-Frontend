import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ticketscomponent.html'
})
export class TicketsComponent implements OnInit {

  tickets: any[] = [];
  projectId!: number;
  transitionsMap: { [key: number]: any[] } = {};

  states = ['Backlog', 'Active','InProgress', 'Completed'];

  constructor(private http: HttpClient, private route: ActivatedRoute,  private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.projectId = Number(this.route.snapshot.paramMap.get('projectId'));
    this.loadTickets();

  }

  loadTickets() {
    this.http.get<any[]>(`http://localhost:5000/api/projects/ticket?projectId=${this.projectId}`)
      .subscribe(res => {
        this.tickets = res;
        this.tickets.forEach(t => this.loadTransitions(t.id));
        this.cd.detectChanges();
      });
  }

  getTicketsByState(state: string) {
    return this.tickets.filter(t => t.state === state);
  }

  move(ticketId: number, currentState: string) {

  let toStateId = 0;

  toStateId = this.transitionsMap[ticketId][0].id; // default to first transition

  this.http.post(
    `http://localhost:5000/api/projects/ticket/${ticketId}/transition?toStateId=${toStateId}`,
    {}
    ).subscribe(() => {
     this.loadTickets(); // refresh
    });
  }

  loadTransitions(ticketId: number) {
  this.http.get<any[]>(`http://localhost:5000/api/projects/ticket/${ticketId}/transitions`)
    .subscribe(res => {
      this.transitionsMap[ticketId] = res;
      this.cd.detectChanges();
    });
  }
}