import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { ConcessionnaireAuthentificationComponent } from "./concessionnaire-authentification/concessionnaire-authentification.component";
import { LocataireAuthentificationComponent } from "./locataire-authentification/locataire-authentification.component";



const myRoutes:Routes=[
{path:'', component:AccueilComponent},
{path:'authentificationLocataire', component:LocataireAuthentificationComponent},
{path:'authentificationConcessionnaire', component:ConcessionnaireAuthentificationComponent},

]

export let PROJET_ROUTING=RouterModule.forRoot(myRoutes);