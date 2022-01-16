import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../../shared/types';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  OUT_OF_STOCK = 'out of stock'
  @Input() product!: IProduct;
  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor() { }

  ngOnInit(): void {}

  onAddToCart() {
    this.addToCart.emit(this.product)
  }
}
