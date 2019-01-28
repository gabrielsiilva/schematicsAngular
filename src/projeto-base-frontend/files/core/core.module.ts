import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BreadcrumbObserver } from '@shared/components/components/breadcrumb/service/breadcrumb.observer';
import { BreadcrumbService } from '@shared/components/components/breadcrumb/service/breadcrumb.service';
import { AppHttpInterceptor } from './services/app-http-interceptor.service';
import { HttpUtilsService } from './services/http-utils.service';
import { AlertService } from '@shared/components/components/alert/services/alert-service';

@NgModule({
  imports: [
    CommonModule
  ]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        BreadcrumbService,
        BreadcrumbObserver,
        AlertService,
        HttpUtilsService,
        {
          provide: HTTP_INTERCEPTORS,
          multi: true,
          useClass: AppHttpInterceptor
        }
      ]
    };
  }

}
