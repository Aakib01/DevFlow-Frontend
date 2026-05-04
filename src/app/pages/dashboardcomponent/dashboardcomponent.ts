import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboardcomponent.html'
})
export class DashboardComponent implements OnInit {

  projects: any[] = [];

  constructor(private http: HttpClient, private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<any[]>('http://localhost:5000/api/projects/project')
      .subscribe(res => {
        this.projects = res;
        this.cd.detectChanges();
      });
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/']);  
  }
}