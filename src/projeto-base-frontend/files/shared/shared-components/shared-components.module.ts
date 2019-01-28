import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ToastrModule } from 'ngx-toastr';
import { AlertComponent } from './components/alert/alert.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ContainerPadraoComponent } from './components/container-padrao/container-padrao.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogPadraoComponent } from './components/log-padrao/log-padrao.component';
import { ModalConfirmarComponent } from './components/modal-confirmar/modal-confirmar.component';
import { PaginacaoComponent } from './components/paginacao/paginacao.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ToastrModule.forRoot({
      preventDuplicates: true,
      timeOut: 5000,
      positionClass: 'toast-top-right'
    }),
    PaginationModule.forRoot(),
    ModalModule.forRoot(),
  ],
  declarations: [
    BreadcrumbComponent,
    ContainerPadraoComponent,
    ModalConfirmarComponent,
    PaginacaoComponent,
    HeaderComponent,
    FooterComponent,
    LogPadraoComponent,
    AlertComponent
  ],
  exports: [
    BreadcrumbComponent,
    ContainerPadraoComponent,
    ModalConfirmarComponent,
    PaginacaoComponent,
    HeaderComponent,
    FooterComponent,
    LogPadraoComponent,
    AlertComponent
  ]
})
export class SharedComponentsModule { }
