import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-servicios-particulares-index',
  standalone: true,
  imports: [
    RouterLink,
    NgForOf
  ],
  templateUrl: './servicios-particulares-index.component.html',
  styleUrl: './servicios-particulares-index.component.scss'
})
export class ServiciosParticularesIndexComponent {
  routes = [
    {
      path: 'asesoria-belleza',
      name: 'Asesoría de belleza',
      image: 'assets/images/categories/sub-categories/asesoria-belleza.png'
    },
    {
      path: 'analisis-morfologico',
      name: 'Análisis morfológico',
      image: 'assets/images/categories/sub-categories/analisis-morfologico.png'
    },
    {
      path: 'analisis-armario',
      name: 'Análisis de armario',
      image: 'assets/images/categories/sub-categories/analisis-armario.png'
    },
    {
      path: 'asesoria-bodas',
      name: 'Asesoría para bodas',
      image: 'assets/images/categories/sub-categories/asesoria-bodas.png'
    },
    {
      path: 'asesoria-hombres',
      name: 'Asesoría para hombres',
      image: 'assets/images/categories/sub-categories/asesoria-hombres.png'
    },
    {
      path: 'cambio-step',
      name: 'Cambio step by step',
      image: 'assets/images/categories/sub-categories/cambio-step.png'
    },
    {
      path: 'healthy-styling',
      name: 'Healthy styling',
      image: 'assets/images/categories/sub-categories/healthy-styling.png'
    },
    {
      path: 'asesoria-habilidades-comunicativas',
      name: 'Habilidades comunicativas',
      image: 'assets/images/categories/sub-categories/habilidades-comunicativas.png'
    }
  ];
}
