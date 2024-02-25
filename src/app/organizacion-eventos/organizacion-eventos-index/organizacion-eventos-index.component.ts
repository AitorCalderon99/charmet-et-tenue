import { Component } from '@angular/core';
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
    { path: 'wedding-planner', name: 'Wedding planner' },
    { path: 'entrega-premios', name: 'Entrega de premios' },
    { path: 'convocatorias-vip', name: 'Convocatorias vip' },
    { path: 'inaguraciones', name: 'Inauguraciones' },
    { path: 'aniversarios-empresas', name: 'Aniversarios de empresas' },
    { path: 'presentaciones', name: 'Presentaciones' }
  ];
}
