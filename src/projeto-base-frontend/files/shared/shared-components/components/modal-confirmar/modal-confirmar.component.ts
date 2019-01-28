import { Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';

@Component({
  selector: 'app-im-modal-confirmar',
  templateUrl: './modal-confirmar.component.html',
  styleUrls: ['./modal-confirmar.component.css']
})
export class ModalConfirmarComponent implements OnInit {

  @Input()
  title: string;
  msg: string;
  modalRef: BsModalRef;

  @ViewChild('template')
  templateRef: TemplateRef<any>;

  @Output() confirm: EventEmitter<boolean> = new EventEmitter();

  constructor(private modalService: BsModalService) { }

  ngOnInit() { }

  solicitarConfirmacao(msg: string) {
    this.msg = msg;
    this.modalRef = this.modalService.show(this.templateRef, { class: 'modal-dialog-centered' });
  }

  confirmar(con: boolean) {
    if (con === true) {
      this.confirm.next(con);
    }
    this.modalRef.hide();
  }

}
