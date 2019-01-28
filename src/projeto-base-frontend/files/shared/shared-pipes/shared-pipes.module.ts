import { NgModule } from '@angular/core';
import { SituacaoPipe } from './pipes/situacao.pipe';
import { CommonModule } from '@angular/common';
import { SimNaoPipe } from './pipes/simNao.pipe';
import { HoraDataHoraPipe } from './pipes/hora-data-hora.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SituacaoPipe,
    SimNaoPipe,
    HoraDataHoraPipe
  ],
  exports: [
    SituacaoPipe,
    SimNaoPipe,
    HoraDataHoraPipe
  ]
})
export class SharedPipesModule {
}
