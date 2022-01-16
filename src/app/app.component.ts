import { AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
import { CartService } from './cart/services/cart.service';
import { GENERATED_STRING, LOCAL_STORAGE, TITLE } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('appTitle')  appTitle!: ElementRef;

  constructor(
    public cartService: CartService,
    @Inject(TITLE) public title: string,
    @Inject(GENERATED_STRING) public generatedString: string,
    @Optional() @Inject(LOCAL_STORAGE) public localStorage: Storage
  ){
    this.localStorage.setItem('keyOne', this.generatedString)
    console.log(this.localStorage.getItem('keyOne'))
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = `<h1>${this.title}</h1>`;
  }
}
