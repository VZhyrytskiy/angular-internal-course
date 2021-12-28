import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent, CartListComponent } from './components';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ CartListComponent, CartItemComponent ],
  imports: [CommonModule, SharedModule ],
  exports: [ CartListComponent, CartItemComponent]
})
export class CartModule { }
