import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthentificationConcessionnaireService } from '../../../services/authentification-concessionnaire.service';

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
this.authenService.authentifier(datas.value).subscribe({
  next:(response:any)=>{
    console.log(response);
   
    alert("Connexion effective");
  }, error:(err)=>{
    this.error=err.error;
    console.log(err);
    datas.reset();
  }
})

}

}
