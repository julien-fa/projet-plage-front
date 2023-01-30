import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConcessionnaireAuthentificationComponent } from "./concessionnaire/liste-locataires/concessionnaire-authentification/concessionnaire-authentification.component";
import { ListeLocatairesComponent } from "./concessionnaire/liste-locataires/liste-locataires.component";
import { LoginConcessionaireGuard } from "./guard/login-concessionaire.guard";
import { LogoutGuard } from "./guard/logout.guard";
import { LocataireAuthentificationComponent } from "./locataire-authentification/locataire-authentification.component";



const myRoutes:Routes=[
{path:'', component:AccueilComponent},
{path:'authentificationLocataire', component:LocataireAuthentificationComponent,canActivate:[LogoutGuard]},
{path:'authentificationConcessionnaire', component:ConcessionnaireAuthentificationComponent, canActivate:[LogoutGuard]},
{path:'listeLocataire', component:ListeLocatairesComponent, canActivate:[LoginConcessionaireGuard]}

]

export let PROJET_ROUTING=RouterModule.forRoot(myRoutes);