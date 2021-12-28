import { Injectable } from '@angular/core';
import productList from '../../shared/product-list';
import { IProduct } from '../../shared/types';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private cartService: CartService,
  ) { }

  public getProducts(): IProduct[]  {
    return productList
  }

  public addToCart(product: IProduct): void {
    this.cartService.addToCart({ ...product, quantity: 1})
  }
}
