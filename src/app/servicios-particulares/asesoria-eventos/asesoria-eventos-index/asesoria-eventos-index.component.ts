import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-asesoria-eventos-index',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './asesoria-eventos-index.component.html',
  styleUrl: './asesoria-eventos-index.component.scss'
})
export class AsesoriaEventosIndexComponent {
  routes = [
    {
      path: 'anfitrion',
      name: 'Asesoría Anfitrión',
      image: 'assets/images/categories/sub-categories/asesoria-anfitrion.png'
    },
    {
      path: 'invitado',
      name: 'Asesoría Invitado',
      image: 'assets/images/categories/sub-categories/asesoria-invitados.png'
    },
  ];
}
