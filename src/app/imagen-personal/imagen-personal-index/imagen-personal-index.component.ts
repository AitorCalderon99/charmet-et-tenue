import {Component} from '@angular/core';
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
    {
      path: 'iniciacion-moda',
      name: 'Iniciación a la moda',
      image: 'assets/images/categories/sub-categories/iniciacion-moda.png'
    },
    {
      path: 'profesional-moda',
      name: 'Profesional de moda',
      image: 'assets/images/categories/sub-categories/profesional-moda.png'
    },
    {
      path: 'experto-moda',
      name: 'Experto en moda',
      image: 'assets/images/categories/sub-categories/experto-moda.png'
    },
    {
      path: 'pierde-el-miedo',
      name: 'Pierde el miedo a hablar en público',
      image: 'assets/images/categories/sub-categories/pierde-el-miedo.png'
    },
    {
      path: 'competencias-comunicativas',
      name: 'Competencias comunicativas',
      image: 'assets/images/categories/sub-categories/competencias-comunicativas.png'
    },
  ];
}
