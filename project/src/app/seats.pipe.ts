import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seats'
})
export class SeatsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
