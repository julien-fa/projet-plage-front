import { LienDeParente } from './../../model/LienDeParente';
import { LocataireService } from './../../services/locataire.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pays } from 'src/app/model/Pays';
import { PaysService } from 'src/app/services/pays.service';
import { Locataire } from 'src/app/model/Locataire';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  //attributs
  listePays: Pays[] = [];

  constructor(
    private paysService: PaysService,
    private locataireService: LocataireService,
    private router: Router
  ) {}
  //appeler lien de parente

  //méthode ng on init

  ngOnInit() {
    this.getPays();
  }

  //appeler la liste des pays
  getPays() {
    this.paysService.getPays().subscribe((pays) => {
      for (let element of pays) {
        let pays = new Pays(element.code, element.nom);
        this.listePays.push(pays);
      }
    });
  }

  //méthode vérification et ajout

  verificationValidations(formLogin: NgForm) {
    let infos = formLogin.value;
    console.log(infos);
    if(infos.nom == "" || infos.nom == null){
      
    }
    let locataireValide = new Locataire(
      infos.nom,
      infos.prenom,
      infos.email,
      infos.password,
      infos.pays,
      infos.lienDeParente
    );
    console.log(locataireValide);
    this.locataireService.ajouterLocataire(locataireValide).subscribe({
      next: () => this.router.navigate(['']),
    });
  }

  //méthode de redirection
  redirectionFormulaireInscription(){

  }
  redirectionAccueil() {}
}
