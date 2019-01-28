import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisableControlDirective } from './disable-control.directive';
import { ValorNumericoMaskDirective } from './valor-numeric-mask.directive';
import { RemoveEspacoDirective } from './remove-espaco.directive';

@NgModule({
  declarations: [DisableControlDirective, ValorNumericoMaskDirective, RemoveEspacoDirective],
  exports: [DisableControlDirective, ValorNumericoMaskDirective, RemoveEspacoDirective],
  imports: [
    CommonModule
  ]
})
export class SharedDirectivesModule { }
