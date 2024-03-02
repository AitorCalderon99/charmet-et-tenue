import { Component } from '@angular/core';
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
    {path: 'anfitrion', name: 'Asesoría Anfitrión'},
    {path: 'invitado', name: 'Asesoría Invitado'},
  ];
}
