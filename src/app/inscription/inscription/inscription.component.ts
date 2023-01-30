import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pays } from 'src/app/model/Pays';
import { PaysService } from 'src/app/services/pays.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent {
  //attributs
  listePays: Pays[] = [];

  constructor(private paysService: PaysService, private router: Router) {}
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

  //méthode de redirection
  redirectionAccueil() {}
}
