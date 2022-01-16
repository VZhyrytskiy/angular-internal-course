import { Injectable } from '@angular/core';
import { ICartProduct } from '../../shared/types';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cartProducts: ICartProduct[] = [];
  private _isCartListShown: boolean = false;

  get isCartListShown(): boolean{
    return this._isCartListShown
  }

  get totalQuantity(): number {
    return this._cartProducts.reduce((calc: number, cur: ICartProduct) => {
      calc += cur.quantity
      return calc
    }, 0)
  }

  get totalSum(): number {
    return this._cartProducts.reduce((calc: number, cur: ICartProduct) => {
      calc += cur.quantity * cur.price
      return calc
    }, 0)
  }

  get isEmptyCart(): boolean {
    return !!this.totalSum
  }

  constructor() { }

  public getCartProducts(): ICartProduct[] | []  {
    return this._cartProducts
  }


  public addProduct(productItem: ICartProduct): void {
    const index = this.findIndex(productItem);
      index < 0
        ? this._cartProducts.push(productItem)
        : this.increaseQuantity(index);
  }

  public increaseQuantity(index: number): void {
    this._cartProducts[index].quantity++
  }

  public decrease(index: number): void {
    this._cartProducts[index].quantity--
  }

  public findIndex(cartProduct: ICartProduct): number {
    return this._cartProducts.findIndex(product => product.id === cartProduct.id)
  }

  public removeProduct(productItem: ICartProduct) {
    this._cartProducts = this._cartProducts.filter(product => product.id !== productItem.id);
  }

  public toggleCartList(): void {
    this._isCartListShown = !this._isCartListShown
  }

  public removeAllProducts(): void {
    this._cartProducts = []
  }
}
