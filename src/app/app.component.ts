import { AfterViewInit, Component, ElementRef, Inject, Optional, ViewChild } from '@angular/core';
import { CartService } from './cart/services/cart.service';
import { GENERATED_STRING, LOCAL_STORAGE, TITLE } from './shared/shared.module';
import { SortService } from './shared/sort.service';
import { TFilterNames } from './shared/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ SortService ]
})
export class AppComponent implements AfterViewInit {
  filterNameArr: TFilterNames[] = ['price', 'rating', 'category'];
  // filter = this.filterNameArr[0];
  // sort =  "true"


  @ViewChild('appTitle')  appTitle!: ElementRef;

  constructor(
    public cartService: CartService,
    @Inject(TITLE) public title: string,
    @Inject(GENERATED_STRING) public generatedString: string,
    @Optional() @Inject(LOCAL_STORAGE) public localStorage: Storage,
    // public sortSortService: SortService
  ){
    this.localStorage.setItem('keyOne', this.generatedString)
  }

  ngAfterViewInit() {
    this.appTitle.nativeElement.innerHTML = `<h1>${this.title}</h1>`;
  }
}
