import { Injectable } from '@angular/core';
import productList from './product-list';
import { IProduct } from './types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  public getProducts(): IProduct[]  {
    return productList
  }
}
