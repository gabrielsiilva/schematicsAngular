import { Component, OnInit, Input } from '@angular/core';
import { LogCriacaoDTO } from '@shared/models/interface/log-criacao-dto.model';

@Component({
  selector: 'app-im-log-padrao',
  templateUrl: './log-padrao.component.html',
  styleUrls: ['./log-padrao.component.css']
})
export class LogPadraoComponent implements OnInit {
  @Input() logModel: LogCriacaoDTO;
  constructor() { }

  ngOnInit() {
  }

  getData(time: number) {
    return new Date(time);
  }
}
