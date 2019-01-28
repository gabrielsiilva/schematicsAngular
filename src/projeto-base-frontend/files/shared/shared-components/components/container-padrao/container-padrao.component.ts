import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-im-container-padrao',
  templateUrl: './container-padrao.component.html',
  styleUrls: ['./container-padrao.component.css']
})
export class ContainerPadraoComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  cardPesquisa: boolean;

  constructor() { }

  ngOnInit() {
  }

}
