import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dateConvert'
})
export class DateConvertPipe implements PipeTransform {
  public newDate;
  transform(value: any, args?: any): any {
    this.newDate = moment(value).format('DD/MM/YYYY HH:mm');
    return this.newDate;
  }

}
