import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from '../../model/card-data';

@Component({
  selector: 'app-card-small',
  templateUrl: './card-small.component.html',
  styleUrls: ['./card-small.component.scss'],
})
export class CardSmallComponent implements OnInit {
  @Input() cardBrowseData!: CardData;
  @Output() idBrowsItem = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  addCard(id: number) {
    this.idBrowsItem.emit(id);
  }
}
