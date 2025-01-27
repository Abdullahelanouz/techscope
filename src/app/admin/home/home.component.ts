import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products = [
    { id: 1, name: 'iPhone', price: 1200, category: 'إكسسوارات', available: true },
    { id: 2, name: 'Laptop Dell', price: 900, category: 'لابتوبات', available: true },
    { id: 3, name: 'Bag Gucci', price: 700, category: 'شنط', available: false },
    { id: 4, name: 'Samsung S22', price: 1000, category: 'هواتف', available: true },
    { id: 5, name: 'MacBook Pro', price: 1500, category: 'لابتوبات', available: false }
  ];

  totalProducts: number = 0;
  availableProducts: number = 0;
  unavailableProducts: number = 0;
  categoryCounts: { [key: string]: number } = {};
  categories: string[] = []; // تعريف خاصية التصنيفات


  ngOnInit(): void {
    Chart.register(...registerables);

    // حساب الإحصائيات
    this.totalProducts = this.products.length;
    this.availableProducts = this.products.filter(product => product.available).length;
    this.unavailableProducts = this.products.filter(product => !product.available).length;
    this.categories = [...new Set(this.products.map(product => product.category))];

     // حساب عدد المنتجات لكل تصنيف
  this.categoryCounts = this.categories.reduce((acc: { [key: string]: number }, category: string) => {
    acc[category] = this.products.filter(product => product.category === category).length;
    return acc;
  }, {});

    // رسم المخطط
    this.createCategoryChart();
  }

  createCategoryChart(): void {
    const ctx = document.getElementById('categoryChart') as HTMLCanvasElement;
    const data = {
      labels: Object.keys(this.categoryCounts),
      datasets: [{
        label: 'عدد المنتجات',
        data: Object.values(this.categoryCounts),
        backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0', '#9966ff'],
      }]
    };

    new Chart(ctx, {
      type: 'pie',
      data: data,
    });
  }
}