import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-organizacion-eventos-index',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './organizacion-eventos-index.component.html',
  styleUrl: './organizacion-eventos-index.component.scss'
})
export class OrganizacionEventosIndexComponent {
  routes = [
    {
      path: 'wedding-planner',
      name: 'Wedding planner',
      image: 'assets/images/categories/sub-categories/wedding-planner.png'
    },
    {
      path: 'entrega-premios',
      name: 'Entrega de premios',
      image: 'assets/images/categories/sub-categories/entrega-premios.png'
    },
    {
      path: 'convocatorias-vip',
      name: 'Convocatorias vip',
      image: 'assets/images/categories/sub-categories/convocatorias-vip.png'
    },
    {
      path: 'inaguraciones',
      name: 'Inauguraciones',
      image: 'assets/images/categories/sub-categories/asesoria-inaguraciones.png'
    },
    {
      path: 'aniversarios-empresas',
      name: 'Aniversarios de empresas',
      image: 'assets/images/categories/sub-categories/aniversarios-empresas.png'
    },
    {
      path: 'presentaciones',
      name: 'Presentaciones',
      image: 'assets/images/categories/sub-categories/organizacion-presentaciones.png'
    }
  ];
}
