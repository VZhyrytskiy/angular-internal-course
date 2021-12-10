import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProduct } from '../../services/types';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  cartProduct: IProduct[]
  EMPTY_CART = 'Empty cart'

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
   this.cartProduct =  this.cartService.getCartProducts()
    console.log(this.cartProduct)
  }

  trackByItems(index:number, el: IProduct): number {
    return el.id
  }

}
