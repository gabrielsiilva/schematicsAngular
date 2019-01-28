import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simNaoTradutor'
})
export class SimNaoPipe implements PipeTransform {

  transform(value: any): any {
    return value === 'S' ? 'Sim' : 'Não';
  }

}
