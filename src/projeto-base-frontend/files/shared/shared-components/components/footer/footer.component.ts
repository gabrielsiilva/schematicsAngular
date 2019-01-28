import { Component, OnInit } from '@angular/core';
import { Constantes } from '@shared/models/const/constants';

@Component({
  selector: 'app-im-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getVersao() {
    return Constantes.versaoBuild;
  }

}
