import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'twoDecimal'
})
export class TwoDecimalPipe implements PipeTransform {

  transform(value: number | string | undefined | null): string {
    if (value === null || value === undefined || value === '') {
      return '';
    }

    const num = typeof value === 'string' ? parseFloat(value) : value;
    return num.toFixed(2);
  }

}
