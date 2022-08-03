import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { CardData } from '../../model/card-data';
import { ItemsCardService } from '../../services/items-card.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  constructor(private _CookieService: CookieService) {}
  productsShopping!: CardData[];
  ngOnInit(): void {
    this.productsShopping = JSON.parse(
      this._CookieService.get('itemsChooesShopping')
    );
    console.log(this.productsShopping);
  }
}
