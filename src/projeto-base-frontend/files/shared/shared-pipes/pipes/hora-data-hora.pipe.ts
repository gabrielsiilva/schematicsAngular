import { Pipe, PipeTransform } from '@angular/core';
import * as StringMask from 'string-mask';

@Pipe({
  name: 'horaDataHora'
})
export class HoraDataHoraPipe implements PipeTransform {

  horaMascara: StringMask;
  horaDataMascara: StringMask;

  transform(value: any): any {
    const valueStr: string = value;
    if (valueStr.length === 4) {
      this.horaMascara = new StringMask('00:00');
      value = this.horaMascara.apply(value);
      return value;
    } else if (valueStr.length === 8) {
      this.horaDataMascara = new StringMask('00/00/0000');
      value = this.horaDataMascara.apply(value);
      return value;
    } else {
      return value;
    }
  }

}
