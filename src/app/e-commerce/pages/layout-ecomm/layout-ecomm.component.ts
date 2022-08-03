import { CookieService } from 'ngx-cookie-service';
import { CardData } from './../../model/card-data';
import { Component, OnInit } from '@angular/core';
import { ItemsCardService } from '../../services/items-card.service';

@Component({
  selector: 'app-layout-ecomm',
  templateUrl: './layout-ecomm.component.html',
  styleUrls: ['./layout-ecomm.component.scss'],
})
export class LayoutEcommComponent implements OnInit {
  constructor(
    private _ItemsCardService: ItemsCardService,
    private _CookieService: CookieService
  ) {}

  itemsCard!: CardData[];
  itemsBrowseCard!: CardData[];

  itemsChooesShopping: CardData[] = [];
  itemChooes: any;
  ngOnInit(): void {
    this.itemsCard = this._ItemsCardService.getAllItems();
    this.itemsBrowseCard = this._ItemsCardService.getBrowseItems();
  }

  idItem(id: number) {
    this.itemChooes = this.itemsCard.filter((item) => item.id === id);
    this.itemsChooesShopping.push(this.itemChooes[0]);
    this._CookieService.set(
      'itemsChooesShopping',
      JSON.stringify(this.itemsChooesShopping)
    );
  }

  idBrowsItem(id: number) {
    console.log(id);
  }
}
