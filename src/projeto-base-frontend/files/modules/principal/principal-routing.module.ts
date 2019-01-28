import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaInicialComponent } from './components/pagina-inicial/pagina-inicial.component';

const routes: Routes = [
  {
    path: 'integrador-municipal',
    component: PaginaInicialComponent,
    data: {
      titulo: 'Home'
    },
    children: [
      {
        path: 'administracao',
        children: [
          {
            path: 'servicos',
            loadChildren: '../fm-servicos/fm-servicos.module#FmServicosModule',
            data: {
              titulo: 'Serviços'
            }
          },
          {
            path: 'parametros',
            loadChildren: '../fm-parametros/fm-parametros.module#FmParametrosModule',
            data: {
              titulo: 'Parâmetros Gerais'
            }
          }
        ],
        data: {
          titulo: 'Administração'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
