import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(list: any, text: string, keyword: string): any[] {
    if (text === '') {
      return list;
    }

    const textLower = text.toLowerCase();
    if (keyword != 'price') {
      return list.filter((item: any) =>
        item[keyword].toLowerCase().includes(textLower)
      );
    } else {
      return list.filter((item: any) => +item[keyword] <= +textLower);
    }
  }
}
