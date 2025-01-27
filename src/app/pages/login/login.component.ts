import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.email === 'admin@example.com' && this.password === 'admin123') {
      localStorage.setItem('role', 'admin');
      this.router.navigate(['/admin']);
    } else if (this.email === 'user@example.com' && this.password === 'user123') {
      localStorage.setItem('role', 'user');
      this.router.navigate(['/']);
    } else {
      alert('Invalid credentials');
    }
  }
}
