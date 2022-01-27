import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ICartProduct, IProduct, TFilterNames, TFilterNamesCart } from '../../../shared/types';
import { SortService } from '../../../shared/sort.service';


@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss'],
  providers: [ SortService ]
})
export class CartListComponent implements OnInit {
  cartProduct!: ICartProduct[];
  filterNameArr: TFilterNamesCart[] = ['price', 'rating', 'category', 'quantity'];

  EMPTY_CART = 'Empty cart';
  PURCHASE_AMOUNT = 'Total quantity';
  NUMBER_OF_PURCHASE = 'Number of purchases'

  constructor(
    public cartService: CartService,
    public sortService: SortService
  ) { }

  ngOnInit(): void {
   this.cartProduct = this.cartService.getCartProducts()
  }

  trackByItems(index:number, el: ICartProduct): number {
    return el.id;
  }

  public onIncrease(cartProduct: any): void {
    this.cartService.increaseQuantity(
      this.cartService.findIndex(cartProduct)
    )
  }

  public onDecrease(cartProduct: any): void {
    if(cartProduct.quantity <= 0) {
      return
    }
    this.cartService.decrease(
      this.cartService.findIndex(cartProduct)
    )
  }

  public onDeleteItem(cartProduct: any ): void {
    this.cartService.removeProduct(cartProduct)
    this.cartProduct = this.cartService.getCartProducts()
  }

  public removeAllProducts(): void {
    this.cartService.removeAllProducts()
    this.cartProduct = this.cartService.getCartProducts()
  }
}
