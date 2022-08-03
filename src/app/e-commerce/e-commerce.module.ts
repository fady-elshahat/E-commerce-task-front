import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardSmallComponent } from './components/card-small/card-small.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WrapperSliderComponent } from './components/wrapper-slider/wrapper-slider.component';
import { LayoutEcommComponent } from './pages/layout-ecomm/layout-ecomm.component';
import { RatingModule } from 'ng-starrating';
import { SwiperModule } from 'swiper/angular';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    CardItemComponent,
    CardSmallComponent,
    NavbarComponent,
    WrapperSliderComponent,
    LayoutEcommComponent,
    ShoppingCartComponent,
  ],
  imports: [CommonModule, ECommerceRoutingModule, RatingModule, SwiperModule],
})
export class ECommerceModule {}
