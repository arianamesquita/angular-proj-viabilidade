import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  display: boolean = true;

  constructor( private router: Router ){
    this.router.events.subscribe((val) => {
      this.display = this.router.url.includes('empresa');
    });
  }

}
