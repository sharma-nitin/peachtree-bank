import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterby',
  pure:false
})
export class FilterbyPipe implements PipeTransform {

  transform(items: any[], searchkey: string): any {
    if (!items || !searchkey) {
        return items;
    }
    return items.filter(item => item.merchant.name.toLowerCase().includes(searchkey.toLowerCase()));
}

}
