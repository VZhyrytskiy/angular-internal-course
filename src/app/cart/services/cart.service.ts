import { Injectable } from '@angular/core';
import { ICartProduct } from '../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  products: ICartProduct[] = [];
  private _isCartListShown: boolean = false;

  get isCartListShown(): boolean{
    return this._isCartListShown
  }

  constructor() { }

  public getCartProducts(): ICartProduct[] | []  {
    return this.products
  }


  public addToCart(productItem: ICartProduct): void {
    const index = this.findIndex(productItem);
      index < 0
        ? this.products.push(productItem)
        : this.increase(index);
  }

  public increase(index: number): void {
    this.products[index].quantity++
  }

  public decrease(index: number): void {
    this.products[index].quantity--
  }

  public findIndex(cartProduct: ICartProduct): number {
    return this.products.findIndex(product => product.id === cartProduct.id)
  }

  public deleteCartItem(productItem: ICartProduct) {
    this.products = this.products.filter(product => product.id !== productItem.id);
  }

  public getCartSum(): number {
    return this.products.reduce((calc: number, cur: ICartProduct) => {
      calc += cur.quantity * cur.price
      return calc
    }, 0)
  }

  public toggleCartList(): void {
    this._isCartListShown = !this._isCartListShown
  }

  public getNumberPurchases(): number {
    return this.products.reduce((calc: number, cur: ICartProduct) => {
      calc += cur.quantity
      return calc
    }, 0)
  }
}
