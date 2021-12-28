import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartProduct, IProduct } from '../../../shared/types';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartProduct!: ICartProduct[];
  EMPTY_CART = 'Empty cart';
  PURCHASE_AMOUNT = 'Purchase amount';
  NUMBER_OF_PURCHASE = 'Number of purchases'

  constructor(
    public cartService: CartService
  ) { }

  ngOnInit(): void {
   this.cartProduct = this.cartService.getCartProducts()
  }

  trackByItems(index:number, el: ICartProduct): number {
    return el.id;
  }

  public onIncrease(cartProduct: any): void {
    this.cartService.increase(
      this.cartService.findIndex(cartProduct)
    )
  }

  public onDecrease(cartProduct:any): void {
    if(cartProduct.quantity <= 0) {
      return
    }
    this.cartService.decrease(
      this.cartService.findIndex(cartProduct)
    )
  }

  public onDeleteItem(cartProduct: any): void {
    this.cartService.deleteCartItem(cartProduct)
    this.cartProduct = this.cartService.getCartProducts()
  }
}
