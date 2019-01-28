import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { AlertService } from '@shared/components/components/alert/services/alert-service';
import { TipoAppResponseEnum } from '@shared/models/enum/tipo-app-response.enum';
import { AppResponsePadraoModel } from '@shared/models/interface/app-response-padrao.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

export class AppHttpInterceptor implements HttpInterceptor {

    constructor(private loadingService: NgxSpinnerService, private alertService: AlertService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loadingService.show();
        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.loadingService.hide();
                this.showMessage(event.body as AppResponsePadraoModel);
            }
        },
            () => {
                this.loadingService.hide();
            }));
    }

    showMessage(erroModel: AppResponsePadraoModel) {
        try {
            if (erroModel.type != null) {
                if (erroModel.type === TipoAppResponseEnum.ERROR) {
                    this.alertService.error(erroModel.msg);
                } else if (erroModel.type === TipoAppResponseEnum.SUCCESS) {
                    this.alertService.success(erroModel.msg);
                }
            }

        } catch (error) {
            this.alertService.error('erro')
        }
    }
}
