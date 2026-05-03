import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  standalone: true,
  selector: 'app-logincomponent',
  imports: [FormsModule],
  templateUrl: './logincomponent.html',
  styleUrl: './logincomponent.css',
})
export class LoginComponent {
  
  userName = '';
  password = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
     const url = `https://localhost:5001/api/auth/login?userName=${this.userName}&password=${encodeURIComponent(this.password)}`;

    this.http.post(url, {}, { responseType: 'text' })  // 🔥 empty body since API expects query params
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res);

          if (localStorage.getItem('token')) {
            this.router.navigate(['/dashboard']);
        }
        },
        error: (err) => {
          console.error('Login failed', err);
        }
      });  
  }
}
