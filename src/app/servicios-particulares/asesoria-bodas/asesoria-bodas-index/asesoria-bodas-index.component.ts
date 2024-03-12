import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-asesoria-bodas-index',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './asesoria-bodas-index.component.html'
})
export class AsesoriaBodasIndexComponent {
  routes = [
    {
      path: 'novia',
      name: 'Asesoría novia',
      image: 'assets/images/categories/sub-categories/asesoria-novias.png'
    },
    {
      path: 'novio',
      name: 'Asesoría novio',
      image: 'assets/images/categories/sub-categories/asesoria-novios.png'
    },
    {
      path: 'madrina',
      name: 'Asesoría madrina',
      image: 'assets/images/categories/sub-categories/asesoria-madrinas.png'
    }
  ];
}
