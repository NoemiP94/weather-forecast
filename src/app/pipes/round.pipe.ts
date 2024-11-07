import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'round',
})
export class RoundPipe implements PipeTransform {
  transform(value: number, decimals: number = 2): string {
    return value.toFixed(decimals);
  }
}
