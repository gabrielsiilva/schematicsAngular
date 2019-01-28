import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '@shared/components/shared-components.module';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';
import { PrincipalRoutingModule } from './principal-routing.module';


@NgModule({
  declarations: [PaginaInicialComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    SharedComponentsModule
  ]
})
export class PrincipalModule { }
