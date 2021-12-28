import { Pipe, PipeTransform } from '@angular/core';
import { ECategory } from './category';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(category: string): string {
    return ECategory[category as keyof typeof ECategory]
  }
}
