import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisNotation'
})
export class EllipsisNotationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
