import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'situacaoTradutor'
})
export class SituacaoPipe implements PipeTransform {

  transform(value: any): any {
    return value === 'A' ? 'Ativo' : 'Inativo';
  }

}
