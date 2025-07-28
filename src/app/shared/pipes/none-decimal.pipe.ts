import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noneDecimal'
})
export class NoneDecimalPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null || isNaN(Number(value))) return '';

    const num = Number(value);
    const [integer, decimal] = num.toString().split('.');

    if (!decimal || decimal.length === 0) return integer;
    return `${integer}`;
  }

}
