import { CardData } from './../../model/card-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
})
export class CardItemComponent implements OnInit {
  @Input() cardData!: CardData;
  @Output() idItem = new EventEmitter<number>();
  showAddItems!: boolean;

  constructor(private _Router: Router) {}

  ngOnInit(): void {
    if (this._Router.url == '/shopping-cart') this.showAddItems = true;
  }

  addCard(id: number) {
    this.idItem.emit(id);
  }
}
