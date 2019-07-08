import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let currentTime: any  = new Date();
    let postedNoTime: any = new Date(value.getFullYear(), value.getMonth(), value.getDate());
    var dateDiff = Math.abs(currentTime - postedNoTime);
    const secInADay = 86400;
    var dateDiffInSec = dateDiff * 0.001;
    var dateCounter = dateDiffInSec / secInADay;

    if (dateCounter >= 1 && currentTime > value) {
      return Math.floor(dateCounter);
    } else {
      return 0;
    }
  }
}
