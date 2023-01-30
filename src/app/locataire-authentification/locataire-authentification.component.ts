import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationLocataireService } from '../services/authentification-locataire.service';
import { LocalService } from '../services/local.service';

@Component({
  selector: 'app-locataire-authentification',
  templateUrl: './locataire-authentification.component.html',
  styleUrls: ['./locataire-authentification.component.css']
})


export class LocataireAuthentificationComponent {

  constructor(private authentificationService:AuthentificationLocataireService, private localService:LocalService){

  }
  erreur:any;

authentification(datas: any){
this.authentificationService.authentifier(datas.value).subscribe({
  next:(results)=>{
console.log(results);
alert("Connexion effective");
this.localService.saveData('idLocataire','jk1788');
  
    console.log(sessionStorage.getItem('idLocataire'));
  }, error:(err)=>{
    this.erreur=err.error;
    datas.reset();
    console.log(err);
  }
})
}


}
