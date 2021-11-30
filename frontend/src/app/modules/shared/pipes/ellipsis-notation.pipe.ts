import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'ellipsisNotation'
})
export class EllipsisNotationPipe implements PipeTransform {

  transform(value: string, maxLength: number): string {
    return (value.length <= maxLength) ? value : `${value.substr(0, maxLength)}...`;
  }

}
