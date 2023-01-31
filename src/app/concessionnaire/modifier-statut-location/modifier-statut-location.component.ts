import { ActivatedRoute, Router } from '@angular/router';
import { Component } from '@angular/core';
import { Location } from '@angular/common';
//import { Locations } from 'src/app/model/Location';

@Component({
  selector: 'app-modifier-statut-location',
  templateUrl: './modifier-statut-location.component.html',
  styleUrls: ['./modifier-statut-location.component.css'],
})
export class ModifierStatutLocationComponent {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    this.location = history.state;
  }
}
