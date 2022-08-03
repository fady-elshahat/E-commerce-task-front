import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() itemsShopping!: number;
  showNumber!: boolean;
  constructor(private _Router: Router) {}

  ngOnInit(): void {
    if (this._Router.url == '/E-commerce') this.showNumber = true;
  }
}
