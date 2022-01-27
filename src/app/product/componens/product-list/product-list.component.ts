import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProduct } from '../../../shared/types';
import { SortService } from '../../../shared/sort.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products!: IProduct[];

  constructor(
    public productService: ProductsService,
    public sortService: SortService
  ) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    // this.sortService.selectedFilter$.subscribe(res => console.log(res))
  }

  onAddToCart($event: any): void {
    this.productService.addToCart($event)
  }
}
