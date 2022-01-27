import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoomDirective } from './zoom.directive';
import { CategoryPipe } from './category.pipe';
import { ConstantsService } from './constants.service';
import { GeneratorFactory } from './generator.factory';
import { GeneratorService } from './generator.service';
import { ColoryDirective } from './colory.directive';
import { SortFilterComponent } from './sort-filter/sort-filter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SortService } from './sort.service';
import { OrderByPipe } from './order-by.pipe';

const FACE_SHOP_CONST: ConstantsService = {
  app: "Fake store",
  ver: "1.0",
  url: "https://fakestoreapi.com/products"
};

const colorArr: string[] = ['red', 'blue', 'green'];

export const TITLE = new InjectionToken<string>('title');
export const GENERATED_STRING = new InjectionToken<string>('generatedString');
export const LOCAL_STORAGE = new InjectionToken<string>('localStorage');
export const COLOR_ARR = new InjectionToken<string>('colorArr')


@NgModule({
  declarations: [
    ZoomDirective,
    CategoryPipe,
    ColoryDirective,
    OrderByPipe,
    SortFilterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ZoomDirective,
    CategoryPipe,
    ColoryDirective,
    OrderByPipe,
    SortFilterComponent
  ],
  providers: [
    { provide: ConstantsService, useValue: FACE_SHOP_CONST },
    { provide: TITLE, useValue:  FACE_SHOP_CONST.app},
    { provide: GENERATED_STRING, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
    { provide: LOCAL_STORAGE, useValue: localStorage },
    { provide: COLOR_ARR, useValue: colorArr },
    SortService
  ]
})
export class SharedModule { }
