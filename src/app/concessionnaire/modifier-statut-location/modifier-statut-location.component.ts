import { ListeStatutsService } from './../../services/liste-statuts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Statut } from 'src/app/model/Statut';
import { Location } from 'src/app/model/Location';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifier-statut-location',
  templateUrl: './modifier-statut-location.component.html',
  styleUrls: ['./modifier-statut-location.component.css'],
})
export class ModifierStatutLocationComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private statutService: ListeStatutsService
  ) {}
  l: Location = history.state;
  listeStatuts: Statut[] = [];

  ngOnInit() {
    this.getStatutsListe();
  }

  //appeler la liste des pays
  getStatutsListe() {
    this.statutService.getStatuts().subscribe((statuts) => {
      for (let element of statuts) {
        let st = new Statut(element.id, element.nom);
        this.listeStatuts.push(st);
      }
    });
  }
  //méthode à terminer
  changerStatut(formStatut: NgForm) {
    let infos = formStatut.value;
    //console.log(infos);
  }
}
