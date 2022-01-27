import { Pipe, PipeTransform } from '@angular/core';
import { IProduct, ISearchValue } from './types';

@Pipe({
  name: 'orderByPipe'
})
export class OrderByPipe implements PipeTransform {

  transform(array: IProduct[], searchValue: ISearchValue): any[] {
    return array.sort((a: IProduct, b: IProduct) => {
      if (a[searchValue.filter] > b[searchValue.filter])
        return searchValue.sort ? 1 : -1;
      if (a[searchValue.filter] < b[searchValue.filter])
        return searchValue.sort ? -1 : 1;
      return 0;
    })
  }
}
