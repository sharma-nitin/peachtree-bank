import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterby',
  pure: false,
})
export class FilterbyPipe implements PipeTransform {
  transform(items: any[], searchkey: string): any {
    if (!items) {
      return items;
    }
    return items
      .filter((item) =>  // filter out the transaction based on search key
        item.merchant.name.toLowerCase().includes(searchkey.toLowerCase())
      )
      .sort((a, b) => {  // sort the transactions in decreasing order by date
        const date1 = a.toString().includes('-')
          ? new Date(a.dates.valueDate.toString()).getTime()
          : a.dates.valueDate;
        const date2 = b.toString().includes('-')
          ? new Date(b.dates.valueDate.toString()).getTime()
          : b.dates.valueDate;
        return new Date(date2).getTime() - new Date(date1).getTime();
      });
  }
}
