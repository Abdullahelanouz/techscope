import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
declare var bootstrap: any; 
@Component({
  selector: 'app-products',
  imports: [NgFor,FormsModule,CurrencyPipe,NgIf],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    { id: 1, name: 'iPhone 14', category: 'Phones', price: 1200 },
    { id: 2, name: 'Dell Laptop', category: 'Laptops', price: 900 },
    { id: 3, name: 'Samsung S22', category: 'Phones', price: 1000 }
  ];

  currentProduct: any = { id: null, name: '', category: '', price: null };
  isEditing: boolean = false;
  message: string = ''; // رسالة التنبيه
  showMessage: boolean = false; // حالة عرض الرسالة

  openModal(product: any = null): void {
    this.isEditing = !!product; // إذا كان هناك منتج يتم تعديله
    this.currentProduct = product
      ? { ...product } // نسخ المنتج للتعديل
      : { id: null, name: '', category: '', price: null }; // منتج جديد
    const modal = new bootstrap.Modal(document.getElementById('productModal')!);
    modal.show();
  }

  saveProduct(): void {
    if (this.isEditing) {
      // تحديث المنتج
      const index = this.products.findIndex(p => p.id === this.currentProduct.id);
      if (index !== -1) {
        this.products[index] = { ...this.currentProduct };
      }
      this.showAlert('Product updated successfully!');
    } else {
      // إضافة منتج جديد
      this.currentProduct.id = this.products.length + 1; // تحديد معرف جديد
      this.products.push({ ...this.currentProduct });
      this.showAlert('Product added successfully!');
    }

    // إغلاق الـ Modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal')!);
    modal?.hide();
  }

  deleteProduct(id: number): void {
   // نافذة تأكيد الحذف
   const confirmDelete = window.confirm('Are you sure you want to delete this product?');
   if (confirmDelete) {
     // إذا وافق المستخدم، يتم الحذف
     this.products = this.products.filter(product => product.id !== id);
     this.showAlert('Product deleted successfully!');
   }
  }
  showAlert(message: string): void {
    this.message = message;
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 3000); // عرض الرسالة لمدة 3 ثوانٍ
  }
 
  selectedProductId: number | null = null;

  openDeleteModal(productId: number): void {
    this.selectedProductId = productId;
    const modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal')!);
    modal.show();
  }
  
  confirmDelete(): void {
    if (this.selectedProductId !== null) {
      this.products = this.products.filter(product => product.id !== this.selectedProductId);
      this.showAlert('Product deleted successfully!');
      this.selectedProductId = null;
  
      // إغلاق الـ Modal
      const modal = bootstrap.Modal.getInstance(document.getElementById('confirmDeleteModal')!);
      modal?.hide();
    }
  }
    
}