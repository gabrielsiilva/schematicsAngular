import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Alert } from '@shared/components/components/alert/models/alert.model';
import { AlertType } from '@shared/components/components/alert/models/alert-type.enum';

@Injectable()
export class AlertService {

    private subject = new Subject<Alert>();

    constructor() { }

    // subscribe to alerts
    getAlert(): Observable<any> {
        return this.subject.asObservable();
    }

    show(message: string, type: AlertType) {
        this.alert(new Alert({ message: message, type: type }));
    }

    // convenience methods
    success(message: string) {
        this.alert(new Alert({ message, type: AlertType.Success }));
    }

    error(message: string) {
        this.alert(new Alert({ message, type: AlertType.Error }));
    }

    info(message: string) {
        this.alert(new Alert({ message, type: AlertType.Info }));
    }

    warn(message: string) {
        this.alert(new Alert({ message, type: AlertType.Warning }));
    }

    // main alert method    
    alert(alert: Alert) {
        this.subject.next(alert);
    }

    // clear alerts
    clear() {
        this.subject.next(new Alert());
    }
}