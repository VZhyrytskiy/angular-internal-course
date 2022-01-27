import { Injectable } from '@angular/core';
import productList from '../../shared/product-list';
import { IProduct } from '../../shared/types';
import { CartService } from '../../cart/services/cart.service';
import { ConstantsService } from '../../shared/constants.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private cartService: CartService,
    private constantService: ConstantsService
  ) {
  }

  public getProducts(): IProduct[] {
    return productList
  }

  public addToCart(product: IProduct): void {
    this.cartService.addProduct({ ...product, quantity: 1})
  }
}
