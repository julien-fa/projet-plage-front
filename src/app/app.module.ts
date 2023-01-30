import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription/inscription.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { LocataireAuthentificationComponent } from './locataire-authentification/locataire-authentification.component';
import { ConcessionnaireAuthentificationComponent } from './concessionnaire/liste-locataires/concessionnaire-authentification/concessionnaire-authentification.component';
import { PROJET_ROUTING } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginConcessionaireGuard } from './guard/login-concessionaire.guard';
import { TokenInterceptorProvider } from './tokeninterceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    AccueilComponent,
    NavbarComponent,
    FooterComponent,
    NavbarComponent,
    AccueilComponent,
    LocataireAuthentificationComponent,
    ConcessionnaireAuthentificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PROJET_ROUTING,
    FormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [LoginConcessionaireGuard, TokenInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
