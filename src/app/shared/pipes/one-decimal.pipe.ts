import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneDecimal',
  standalone:true
})
export class OneDecimalPipe implements PipeTransform {

  transform(value: number | string): string {
    if (value == null || isNaN(Number(value))) return '';

    const num = Number(value);
    const [integer, decimal] = num.toString().split('.');

    if (!decimal || decimal.length === 0) return integer;
    return `${integer}.${decimal[0]}`;
  }
}
