import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-im-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {
  @Input()
  totalItems: string;

  @Input()
  quantidadeItemsAtuais: string;

  @Output() consultarPagina: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  novaPagina(event: any) {
    this.consultarPagina.next(event.page);
  }
}
