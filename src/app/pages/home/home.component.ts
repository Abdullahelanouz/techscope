import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-home',
  imports: [SliderComponent,ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
