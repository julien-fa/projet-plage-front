import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConcessionnaireAuthentificationComponent } from './concessionnaire/liste-locataires/concessionnaire-authentification/concessionnaire-authentification.component';
import { ListeLocatairesComponent } from './concessionnaire/liste-locataires/liste-locataires.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { LocataireAuthentificationComponent } from './locataire-authentification/locataire-authentification.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'inscription',
    component: InscriptionComponent,
  },
  {
    path: 'authentificationLocataire',
    component: LocataireAuthentificationComponent,
  },
  {
    path: 'authentificationConcessionnaire',
    component: ConcessionnaireAuthentificationComponent,
  },
  { path: 'listeLocataire', component: ListeLocatairesComponent },
];

export let PROJET_ROUTING = RouterModule.forRoot(myRoutes);
