import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-imagen-personal-index',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './imagen-personal-index.component.html',
  styleUrl: './imagen-personal-index.component.scss'
})
export class ImagenPersonalIndexComponent {
  routes = [
    { path: 'iniciacion-moda', name: 'Iniciación a la moda' },
    { path: 'profesional-moda', name: 'Profesional de moda' },
    { path: 'experto-moda', name: 'Experto en moda' }
  ];
}
