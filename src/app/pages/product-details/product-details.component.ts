import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: any = {}; // تفاصيل المنتج

  products = [
    { id: 1, name: 'iPhone', price: 1200, condition: 'جديد', brand: 'Apple', description: 'هاتف ذكي رائع.', contact: '123456789', image: 'assets/iphone.jpg' },
    { id: 2, name: 'Laptop Dell', price: 900, condition: 'مستعمل', brand: 'Dell', description: 'لابتوب عالي الأداء.', contact: '987654321', image: 'assets/laptop.jpg' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
     // الحصول على معرف المنتج من الرابط
  const id = this.route.snapshot.paramMap.get('id');

  if (id) {
    // إذا كان `id` غير null، قم بتحويله إلى رقم والبحث عن المنتج
    this.product = this.products.find(p => p.id === +id) || {};
  } else {
    // إذا كان `id` null، قم بإعادة توجيه أو التعامل مع الحالة المناسبة
    console.error('Invalid product ID');
  }
  }

  addToWishlist() {
    alert(`${this.product.name} تمت إضافته إلى المفضلة!`);
  }
}