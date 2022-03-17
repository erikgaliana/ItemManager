import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any, text: string, keyword: string): any[] {
    if (!!text || text === '') {
      return list;
    }
    console.log('arreglo', list);
    console.log('text', text);
    const textLower = text.toLowerCase();

    return list.filter((item: any) =>
      item[keyword].toLowerCase().includes(textLower)
    );
  }
}
