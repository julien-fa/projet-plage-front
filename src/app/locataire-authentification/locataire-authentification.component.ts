import { Component } from '@angular/core';
import { AuthentificationLocataireService } from '../services/authentification-locataire.service';

@Component({
  selector: 'app-locataire-authentification',
  templateUrl: './locataire-authentification.component.html',
  styleUrls: ['./locataire-authentification.component.css']
})


export class LocataireAuthentificationComponent {

  constructor(private authentificationService:AuthentificationLocataireService){

  }
  error:any;

authentification(datas: any){
this.authentificationService.authentifier(datas).subscribe({
  next:(results)=>{
console.log(results);
alert("Connexion effective");
  }, error:(err)=>{
    this.error=err.error;
    console.log(err);
  }
})
}

}
