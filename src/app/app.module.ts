import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LocataireAuthentificationComponent } from './locataire-authentification/locataire-authentification.component';
import { ConcessionnaireAuthentificationComponent } from './concessionnaire/liste-locataires/concessionnaire-authentification/concessionnaire-authentification.component';
import { PROJET_ROUTING } from './app.routing';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from'@angular/common/http';
import { ListeLocatairesComponent } from './concessionnaire/liste-locataires/liste-locataires.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AccueilComponent,
    LocataireAuthentificationComponent,
    ConcessionnaireAuthentificationComponent,
    ListeLocatairesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PROJET_ROUTING,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
