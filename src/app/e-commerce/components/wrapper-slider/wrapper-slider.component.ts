import { Component, OnInit } from '@angular/core';
import SwiperCore, { Navigation, SwiperOptions } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);
@Component({
  selector: 'app-wrapper-slider',
  templateUrl: './wrapper-slider.component.html',
  styleUrls: ['./wrapper-slider.component.scss'],
})
export class WrapperSliderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 50,
    navigation: true,
    scrollbar: { draggable: true },
    autoplay: {
      delay:10000,
    }
  };
}
