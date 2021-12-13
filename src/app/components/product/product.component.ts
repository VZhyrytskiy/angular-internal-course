import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../../services/types';
import { ECategory } from '../../services/category'

enum Fruits {
  Apple = 'APPLE',
  Pomegranate = 'POMEGRANATE',
  Persimmon = 'PERSIMMON'
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input() product: IProduct;

  constructor() { }

  ngOnInit(): void {}

  onAddToCart(): void {
    console.log('Item purchased')
  }

  changeCategory(category: string): string {
    return ECategory[this.product.category as keyof typeof ECategory]
  }
}
