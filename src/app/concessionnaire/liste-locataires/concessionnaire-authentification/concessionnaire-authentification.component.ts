import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LocalService } from 'src/app/services/local.service';
import { AuthentificationConcessionnaireService } from '../../../services/authentification-concessionnaire.service';

@Component({
  selector: 'app-concessionnaire-authentification',
  templateUrl: './concessionnaire-authentification.component.html',
  styleUrls: ['./concessionnaire-authentification.component.css']
})
export class ConcessionnaireAuthentificationComponent {

constructor(private authenService: AuthentificationConcessionnaireService, private localService: LocalService){

}

error:any;
authentification(datas:any){
this.authenService.authentifier(datas.value).subscribe({
  next:(results:any)=>{
    console.log(results);
    alert("Connexion effective");
    this.localService.saveData('id','jk123');
  
    console.log(sessionStorage.getItem('id'));
  }, error:(err)=>{
    this.error=err.error;
    console.log(err);
    datas.reset();
  }
})

}

}
