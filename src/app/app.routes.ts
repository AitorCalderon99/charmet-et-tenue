import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LegalAdviseComponent} from "./legal/legal-advise/legal-advise.component";
import {PrivacyPolicyComponent} from "./legal/privacy-policy/privacy-policy.component";
import {CookiesComponent} from "./legal/cookies/cookies.component";
import {PersonalShopperComponent} from "./personal-shopper/personal-shopper.component";
import {ServiciosParticularesComponent} from "./servicios-particulares/servicios-particulares.component";
import {AsesoriaBellezaComponent} from "./servicios-particulares/asesoria-belleza/asesoria-belleza.component";
import {
  AnalisisMorfologicoComponent
} from "./servicios-particulares/analisis-morfologico/analisis-morfologico.component";
import {AnalisisArmarioComponent} from "./servicios-particulares/analisis-armario/analisis-armario.component";
import {AsesoriaBodasComponent} from "./servicios-particulares/asesoria-bodas/asesoria-bodas.component";
import {AsesoriaHombresComponent} from "./servicios-particulares/asesoria-hombres/asesoria-hombres.component";
import {CambioStepComponent} from "./servicios-particulares/cambio-step/cambio-step.component";
import {HealthyStylingComponent} from "./servicios-particulares/healthy-styling/healthy-styling.component";
import {
  AsesoriaHabilidadesComunicativasComponent
} from "./servicios-particulares/asesoria-habilidades-comunicativas/asesoria-habilidades-comunicativas.component";
import {PresentacionesComponent} from "./organizacion-eventos/presentaciones/presentaciones.component";
import {OrganizacionEventosComponent} from "./organizacion-eventos/organizacion-eventos.component";
import {WeddingPlannerComponent} from "./organizacion-eventos/wedding-planner/wedding-planner.component";
import {ImagenPersonalComponent} from "./imagen-personal/imagen-personal.component";
import {
  AniversariosEmpresasComponent
} from "./organizacion-eventos/aniversarios-empresas/aniversarios-empresas.component";
import {IniciacionModaComponent} from "./imagen-personal/iniciacion-moda/iniciacion-moda.component";
import {InaguracionesComponent} from "./organizacion-eventos/inaguraciones/inaguraciones.component";
import {ProfesionalModaComponent} from "./imagen-personal/profesional-moda/profesional-moda.component";
import {ConvocatoriasVipComponent} from "./organizacion-eventos/convocatorias-vip/convocatorias-vip.component";
import {ExpertoModaComponent} from "./imagen-personal/experto-moda/experto-moda.component";
import {EntregaPremiosComponent} from "./organizacion-eventos/entrega-premios/entrega-premios.component";
import {ImagenPersonalIndexComponent} from "./imagen-personal/imagen-personal-index/imagen-personal-index.component";
import {
  OrganizacionEventosIndexComponent
} from "./organizacion-eventos/organizacion-eventos-index/organizacion-eventos-index.component";
import {
  ServiciosParticularesIndexComponent
} from "./servicios-particulares/servicios-particulares-index/servicios-particulares-index.component";
import {AsesoriaEventosComponent} from "./servicios-particulares/asesoria-eventos/asesoria-eventos.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'personal-shopper', component: PersonalShopperComponent},
  {
    path: 'servicios-particulares', component: ServiciosParticularesComponent, children: [
      {path: '', component: ServiciosParticularesIndexComponent},
      {path: 'asesoria-belleza', component: AsesoriaBellezaComponent},
      {path: 'analisis-morfologico', component: AnalisisMorfologicoComponent},
      {path: 'analisis-armario', component: AnalisisArmarioComponent},
      {path: 'asesoria-bodas', component: AsesoriaBodasComponent},
      {path: 'asesoria-eventos', component: AsesoriaEventosComponent},
      {path: 'asesoria-hombres', component: AsesoriaHombresComponent},
      {path: 'cambio-step', component: CambioStepComponent},
      {path: 'healthy-styling', component: HealthyStylingComponent},
      {path: 'asesoria-habilidades-comunicativas', component: AsesoriaHabilidadesComunicativasComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {
    path: 'organizacion-eventos', component: OrganizacionEventosComponent, children: [
      {path: '', component: OrganizacionEventosIndexComponent},
      {path: 'wedding-planner', component: WeddingPlannerComponent},
      {path: 'entrega-premios', component: EntregaPremiosComponent},
      {path: 'convocatorias-vip', component: ConvocatoriasVipComponent},
      {path: 'inaguraciones', component: InaguracionesComponent},
      {path: 'aniversarios-empresas', component: AniversariosEmpresasComponent},
      {path: 'presentaciones', component: PresentacionesComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {
    path: 'imagen-personal', component: ImagenPersonalComponent, children: [
      {path: '', component: ImagenPersonalIndexComponent},
      {path: 'iniciacion-moda', component: IniciacionModaComponent},
      {path: 'profesional-moda', component: ProfesionalModaComponent},
      {path: 'experto-moda', component: ExpertoModaComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {path: 'legal-advise', component: LegalAdviseComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  {path: 'cookies', component: CookiesComponent},
  {path: '**', redirectTo: ''}
];
