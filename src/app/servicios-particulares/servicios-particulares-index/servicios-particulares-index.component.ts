import { Component } from '@angular/core';
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
    {path: 'asesoria-belleza', name: 'Asesoría de belleza'},
    {path: 'analisis-morfologico', name: 'Análisis morfológico'},
    {path: 'analisis-armario', name: 'Análisis de armario'},
    {path: 'asesoria-bodas', name: 'Asesoría para bodas'},
    {path: 'asesoria-hombres', name: 'Asesoría para hombres'},
    {path: 'cambio-step', name: 'Cambio step by step'},
    {path: 'healthy-styling', name: 'Healthy styling'},
    {path: 'asesoria-habilidades-comunicativas', name: 'Habilidades comunicativas'}
  ];
}
