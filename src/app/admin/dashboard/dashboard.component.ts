import { Component } from '@angular/core';
// import { NavbarComponent } from '../../components/navbar/navbar.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  logout(): void {
    // منطق تسجيل الخروج
    localStorage.removeItem('token'); // حذف التوكن أو أي بيانات تسجيل الدخول
    this.router.navigate(['/login']); // إعادة التوجيه إلى صفحة تسجيل الدخول
  }
}
  