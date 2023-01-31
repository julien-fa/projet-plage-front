import { AccueilconcessionnaireComponent } from './concessionnaire/accueil/accueilconcessionnaire/accueilconcessionnaire.component';

import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ConcessionnaireAuthentificationComponent } from './concessionnaire/liste-locataires/concessionnaire-authentification/concessionnaire-authentification.component';
import { ListeLocatairesComponent } from './concessionnaire/liste-locataires/liste-locataires.component';
import { LoginConcessionaireGuard } from './guard/login-concessionaire.guard';
import { LogoutGuard } from './guard/logout.guard';
import { LocataireAuthentificationComponent } from './locataire-authentification/locataire-authentification.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { ListeReservationTraitementComponent } from './concessionnaire/liste-reservation-traitement/liste-reservation-traitement.component';
import { ListeReservationComponent } from './concessionnaire/liste-reservation/liste-reservation.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  {
    path: 'authentificationLocataire',
    component: LocataireAuthentificationComponent,
    canActivate: [LogoutGuard],
  },
  {
    path: 'authentificationConcessionnaire',
    component: ConcessionnaireAuthentificationComponent,
    canActivate: [LogoutGuard],
  },
  {
    path: 'listeLocataire',
    component: ListeLocatairesComponent,
    canActivate: [LoginConcessionaireGuard],
  },
  { path: 'listeLocataire', component: ListeLocatairesComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'concessionnaire', component: AccueilconcessionnaireComponent },
  {
    path: 'concessionnaire/liste-location/traitement',
    component: ListeReservationTraitementComponent,
  },
  {
    path: 'concessionnaire/liste-reservation',
    component: ListeReservationComponent,
  },
];

export let PROJET_ROUTING = RouterModule.forRoot(myRoutes);
