import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any, text: string): any[] {
    console.log('arreglo', list);
    return list;
  }
}
