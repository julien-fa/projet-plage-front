import { Component } from '@angular/core';
import { AuthentificationConcessionnaireService } from '../services/authentification-concessionnaire.service';

@Component({
  selector: 'app-concessionnaire-authentification',
  templateUrl: './concessionnaire-authentification.component.html',
  styleUrls: ['./concessionnaire-authentification.component.css']
})
export class ConcessionnaireAuthentificationComponent {

constructor(private authenService: AuthentificationConcessionnaireService){

}

error:any;
authentification(datas:any){
this.authenService.authentifier(datas).subscribe({
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
