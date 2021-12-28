import { AfterContentChecked, AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { CartService } from './cart/services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, AfterContentChecked {
  TITLE = "Product list";
  isEmptyCart = false;

  @ViewChild('appTitle')  appTitle!: ElementRef;

  constructor(
    public cartService: CartService
  ){}

  ngAfterViewInit(): void {
    this.appTitle.nativeElement.innerHTML = `<h1>${this.TITLE}</h1>`;

  }

  ngAfterContentChecked(): void {
    this.isEmptyCart = !!this.cartService.getCartSum()
  }
}
