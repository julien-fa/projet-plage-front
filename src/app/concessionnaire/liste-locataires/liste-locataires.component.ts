import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AfficherListeUtilisateursService } from 'src/app/services/afficher-liste-utilisateurs.service';
import { SupprimerLocataireService } from 'src/app/services/supprimer-locataire.service';

@Component({
  selector: 'app-liste-locataires',
  templateUrl: './liste-locataires.component.html',
  styleUrls: ['./liste-locataires.component.css']
})


export class ListeLocatairesComponent {

  listeLocataires:any;

  constructor(private listeClientService: AfficherListeUtilisateursService, private supprimerClientService:SupprimerLocataireService, private router: Router){

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


  supprimerLocataire(id:number){
    if(confirm("Voulez vous vraiment supprimer le compte de ce locataire")){
      this.supprimerClientService.supprimerLocataire(id).subscribe({
        next:(results)=>{
        alert("Utilisateur supprimé");
        
        },error:(err)=>{
          alert("Echec de la suppression");
        }
            })
    }
 
  }
}
