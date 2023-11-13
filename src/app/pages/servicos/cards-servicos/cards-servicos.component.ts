import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards-servicos',
  templateUrl: './cards-servicos.component.html',
  styleUrls: ['./cards-servicos.component.css']
})
export class CardsServicosComponent {

  display: boolean = true;

  constructor( private router: Router ){
    this.router.events.subscribe((val) => {
      this.display = this.router.url.includes('servicos');
    });
  }

}
