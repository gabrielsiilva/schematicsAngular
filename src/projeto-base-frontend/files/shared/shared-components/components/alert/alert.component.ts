import { Component } from '@angular/core';
import { AlertService } from '@shared/components/components/alert/services/alert-service';
import { Alert } from '@shared/components/components/alert/models/alert.model';
import { AlertType } from '@shared/components/components/alert/models/alert-type.enum';

@Component({
  selector: 'app-im-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {

  alert: Alert = new Alert();

  constructor(private alertService: AlertService) { }

  ngOnInit() {
    this.alertService.getAlert().subscribe((alert: Alert) => {
      if (!alert.message) {
        this.alert = new Alert();
        return;
      }

      this.alert = alert;
    });
  }

  removeAlert() {
    this.alert = new Alert({});
  }

  cssClass(alert: Alert) {
    if (!alert) {
      return;
    }

    switch (alert.type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

}
