import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [FormsModule,NgFor,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
 

  products = [
    { id: 1, name: 'iPhone 13', price: 1200, condition: 'new', brand: 'apple', category: 'هواتف', series: '13', processor: 'A15', ram: '4GB', storage: '128GB', hddSlots: 'N/A', stock: 'متوفر', offers: true, contact: '123456789', image: 'https://prd.place/400' },
    { id: 2, name: 'Samsung S22', price: 900, condition: 'used', brand: 'samsung', category: 'هواتف', series: 'S22', processor: 'Snapdragon 8', ram: '8GB', storage: '256GB', hddSlots: '2 Slots', stock: 'غير متوفر', offers: false, contact: '987654321', image: 'https://prd.place/400' },
    { id: 3, name: 'iPhone 13', price: 1200, category: 'إكسسوارات', contact: '123456789', image: 'https://prd.place/400' },
    { id: 4, name: 'Laptop Dell', price: 900, category: 'لابتوبات', contact: '987654321', image: 'https://prd.place/400' },
    { id: 5, name: 'Bag Gucci', price: 700, category: 'شنط', contact: '1122334455', image: 'https://prd.place/400' },
    { id: 6, name: 'Samsung S22', price: 1000, category: 'هواتف', contact: '4455667788', image: 'https://prd.place/400'},
    { id: 7, name: 'MacBook Pro', price: 1500, category: 'لابتوبات', contact: '9988776655', image: 'https://prd.place/400' },
    { id: 8, name: 'Wireless Headphones', price: 300, category: 'إكسسوارات', contact: '6677889900', image: '' }
  ];

  price: number = 10000;
  condition: string = '';
  categoryFilter: string = '';
  brand: string = '';
  series: string = '';
  processor: string = '';
  ram: string = '';
  storage: string = '';
  hddSlots: string = '';
  stock: string = '';
  offers: boolean = false;

  categories = ['الكل', 'شنط', 'إكسسوارات', 'لابتوبات','هواتف'];

  selectedCategory: string = 'الكل';
  currentPage: number = 1;
  itemsPerPage: number = 3;
  pages: number[] = [];

  wishlist: any[] = [];
  filterVisible: boolean = false; // لإظهار أو إخفاء التصفية
  ngOnInit() {
    this.calculatePages();
  }
  updatePrice() {
    console.log('السعر المحدد:', this.price);
  }

  filterByCategory(category: string) {
    this.selectedCategory = category;
    this.currentPage = 1;
    this.calculatePages();
  }

  filteredProducts() {
   
    return this.products.filter(product => 
      (this.selectedCategory === 'الكل' || product.category === this.selectedCategory) &&
      (this.price >= product.price) &&
      (!this.condition || product.condition === this.condition) &&
      (!this.categoryFilter || product.category === this.categoryFilter) &&
      (!this.brand || product.brand === this.brand) &&
      (!this.series || product.series === this.series) &&
      (!this.processor || product.processor === this.processor) &&
      (!this.ram || product.ram === this.ram) &&
      (!this.storage || product.storage === this.storage) &&
      (!this.hddSlots || product.hddSlots === this.hddSlots) &&
      (!this.stock || product.stock === this.stock) &&
      (!this.offers || product.offers)
      
    );
  }
  calculatePages() {
    const filteredProducts = this.filteredProducts();
    const totalPages = Math.ceil(filteredProducts.length / this.itemsPerPage);
    this.pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  paginatedProducts() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts().slice(startIndex, endIndex);
  }

  setPage(page: number) {
    this.currentPage = page;
  }
  addToWishlist(product: any) {
    if (!this.wishlist.includes(product)) {
      this.wishlist.push(product);
      alert('تمت إضافة المنتج إلى المفضلة!');
    } else {
      alert('المنتج موجود بالفعل في المفضلة.');
    }
  }
  toggleFilters() {
    this.filterVisible = !this.filterVisible;
  }
}