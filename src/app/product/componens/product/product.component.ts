import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../shared/types';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  OUT_OF_STOCK = 'out of stock';
  @Input() product!: IProduct;
  @Output() addToCart: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  onAddToCart(): void {
    this.addToCart.emit(this.product)
  }
}
