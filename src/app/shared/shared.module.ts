import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomDirective } from './zoom.directive';
import { CategoryPipe } from './category.pipe';



@NgModule({
  declarations: [
    ZoomDirective,
    CategoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ZoomDirective,
    CategoryPipe
  ]
})
export class SharedModule { }
