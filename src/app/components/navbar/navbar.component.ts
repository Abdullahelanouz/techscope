import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterLink,RouterLinkActive,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  isAdmin = localStorage.getItem('role') === 'admin';
  isDarkMode: boolean = false;
  isNavbarOpen = false; // متغير للتحكم بحالة القائمة

  ngOnInit() {
    // التحقق من الوضع المظلم المخزن في LocalStorage
    const savedMode = localStorage.getItem('darkMode');
    this.isDarkMode = savedMode === 'true';

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
    }
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }
 
  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  closeNavbar() {
    this.isNavbarOpen = false;
  }
}