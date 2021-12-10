import { Injectable } from '@angular/core';
import { IProduct } from './types';
import productList from './product-list';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  public getCartProducts(): IProduct[]  {
    return productList.filter(item => item.id <= 3)
  }
}
