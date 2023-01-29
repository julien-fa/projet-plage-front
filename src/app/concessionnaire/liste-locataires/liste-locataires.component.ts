import { Component } from '@angular/core';
import { AfficherListeUtilisateursService } from 'src/app/services/afficher-liste-utilisateurs.service';

@Component({
  selector: 'app-liste-locataires',
  templateUrl: './liste-locataires.component.html',
  styleUrls: ['./liste-locataires.component.css']
})


export class ListeLocatairesComponent {

  listeLocataires:any;

  constructor(private listeClientService: AfficherListeUtilisateursService){

  }

  ngOnInit(){
this.listeClientService.recupererLocataire().subscribe({
  next:(results)=>{
this.listeLocataires=results;
console.log(this.listeLocataires);
  }, error:(err)=>{
    alert("Erreur lors de la récupération des clients");
  }
})
  }
}
