import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LegalAdviseComponent} from "./legal/legal-advise/legal-advise.component";
import {PrivacyPolicyComponent} from "./legal/privacy-policy/privacy-policy.component";
import {CookiesComponent} from "./legal/cookies/cookies.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-advise', component: LegalAdviseComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookies', component: CookiesComponent },
];
