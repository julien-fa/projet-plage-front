import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

constructor(protected localService:LocalService, private router:Router){

}


deconnexion(){
  confirm("Etes-vous sur de vouloir vous déconnecter");
  this.localService.removeData("id");

  this.router.navigateByUrl('/');
}

}
