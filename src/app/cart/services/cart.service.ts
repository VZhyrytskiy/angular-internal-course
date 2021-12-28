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

  getCartProducts(): ICartProduct[] | []  {
    return this.products;
  }


  addToCart(productItem: ICartProduct): void {
    const index = this.findIndex(productItem);
      index < 0
        ? this.products.push(productItem)
        : this.increase(index);
  }

  increase(index: number): void {
    this.products[index].quantity++;
  }

  decrease(index: number): void {
    // например, тут мутация
    this.products[index].quantity--;
  }

  findIndex(cartProduct: ICartProduct): number {
    return this.products.findIndex(product => product.id === cartProduct.id);
  }

  deleteCartItem(productItem: ICartProduct) {
    // например, тут пересоздание, если использовать мутацию, то метод splice
    this.products = this.products.filter(product => product.id !== productItem.id);
  }

  getCartSum(): number {
    return this.products.reduce((calc: number, cur: ICartProduct) => {
      calc += cur.quantity * cur.price
      return calc
    }, 0);
  }

  toggleCartList(): void {
    this._isCartListShown = !this._isCartListShown;
  }

  getNumberPurchases(): number {
    return this.products.reduce((calc: number, cur: ICartProduct) => {
      calc += cur.quantity
      return calc
    }, 0);
  }
}
