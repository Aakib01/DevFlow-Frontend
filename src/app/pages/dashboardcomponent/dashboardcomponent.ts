import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboardcomponent.html'
})
export class DashboardComponent implements OnInit {

  projects: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.http.get<any[]>('http://localhost:5000/api/projects/project')
      .subscribe(res => {
        this.projects = res;
      });
  }
}