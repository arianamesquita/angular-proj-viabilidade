import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent {

  display: boolean = true;

  constructor( private router: Router ){
    this.router.events.subscribe((val) => {
      this.display = this.router.url.includes('login');
    });
  }


}
