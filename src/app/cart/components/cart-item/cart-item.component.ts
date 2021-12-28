import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICartProduct } from 'src/app/shared/types';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() product!: ICartProduct;
  @Output() decrease: EventEmitter<ICartProduct> = new EventEmitter<ICartProduct>()
  @Output() increase: EventEmitter<ICartProduct> = new EventEmitter<ICartProduct>()
  @Output() delete: EventEmitter<ICartProduct> = new EventEmitter<ICartProduct>()

  constructor() { }

  ngOnInit(): void {}

  public increaseItem(): void {
    this.increase.emit(this.product)
  }

  public decreaseItem(): void {
    this.decrease.emit(this.product)
  }

  public deleteItem(): void {
    this.delete.emit(this.product)
  }

  public getProductCount(price: number, quantity: number): number {
    return price * quantity
  }
}
