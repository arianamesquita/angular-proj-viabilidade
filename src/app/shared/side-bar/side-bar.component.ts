import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent{
  buttonHome: string = 'HOME';
  buttonEmpresa: string = 'QUEM SOMOS';
  buttonViabilidade: string = 'VIABILIDADE';
  buttonServicos: string = 'SERVIÇOS';
  buttonAtuacao: string = 'PORTFÓLIO';
  buttonNovidades: string = 'NOVIDADES';
  buttonContatos: string = 'CONTATOS';

  constructor ( private router: Router ) { };

  navigateTo(routerLink: string): void {
    this.router.navigate([routerLink]);
  }
}
