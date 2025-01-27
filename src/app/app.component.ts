import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './components/slider/slider.component';
import { NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,NavbarComponent,FooterComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'techscope';
  showNavbarFooter: boolean = true; // التحكم في إظهار النافبار والفوتر
  constructor(private router: Router) {}
  ngOnInit(): void {
    // الاشتراك في تغيير الروابط
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // التحقق إذا كان الرابط يحتوي على "/admin"
        this.showNavbarFooter = !event.url.startsWith('/admin');
      }
    });
  }
}


