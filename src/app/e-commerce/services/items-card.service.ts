import { CardData } from './../model/card-data';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemsCardService {
  constructor() {}

  getAllItems(): CardData[] {
    return [
      {
        id: 1,
        name: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
        rate: 3,
        price: 90.0,
        status: 'جديد',
        imgSrc: 'assets/img/product/pic-1.png',
      },
      {
        id: 2,
        name: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
        rate: 2,
        price: 110.0,
        descount: 150,
        status: 'جديد',
        imgSrc: 'assets/img/product/pic-2.png',
      },
      {
        id: 3,
        name: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
        rate: 3,
        price: 70.0,
        status: 'عرض',
        imgSrc: 'assets/img/product/pic-3.png',
      },
      {
        id: 4,
        name: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
        rate: 4,
        price: 120.0,
        status: 'جديد',
        imgSrc: 'assets/img/product/pic-6.png',
      },
      {
        id: 5,
        name: 'تيشيرت-كم طويل-آرت وير-نسائي-ملابس',
        rate: 5,
        price: 150.0,
        status: 'عرض',
        descount: 170,
        imgSrc: 'assets/img/product/pic-5.png',
      },
    ];
  }
  getBrowseItems(): CardData[] {
    return [
      {
        id: 1,
        name: 'تيشيرت-كم طويل-آرت ',
        rate: 3,
        price: 30.0,
        status: 'جديد',
        imgSrc: 'assets/img/product/pic.png',
      },
      {
        id: 2,
        name: 'تيشيرت-كم طويل-آرت ',
        rate: 2,
        price: 140.0,
        descount: 60,
        status: 'جديد',
        imgSrc: 'assets/img/product/pic-2.png',
      },
      {
        id: 3,
        name: 'تيشيرت-كم طويل-آرت ',
        rate: 3,
        price: 55.0,
        status: 'عرض',
        imgSrc: 'assets/img/product/pic-1.png',
      },
    ];
  }
}
