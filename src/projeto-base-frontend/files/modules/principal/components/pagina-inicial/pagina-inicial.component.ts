import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from '@shared/components/components/breadcrumb/service/breadcrumb.service';

@Component({
  selector: 'app-im-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {


  constructor(private breadCrumbService: BreadcrumbService) { }

  ngOnInit() {
    setTimeout(() => {
      this.breadCrumbService.listarRotas();
    });
  }

}
