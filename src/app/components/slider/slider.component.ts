import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
@Component({
  selector: 'app-slider',
  imports: [],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements AfterViewInit {

  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'slide',  // تطبيق التأثير بشكل مباشر
      touchMoveStopPropagation: true,
      grabCursor: true,
    });
  }
}