import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent, ProductListComponent } from './componens';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ ProductComponent, ProductListComponent ],
  imports: [CommonModule, SharedModule],
  exports: [ ProductComponent, ProductListComponent ]
})
export class ProductModule { }
