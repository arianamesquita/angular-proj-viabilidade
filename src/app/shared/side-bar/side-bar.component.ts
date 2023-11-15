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

  isIconMoved: boolean = false;
  display: boolean = true;

  ngOnInit(){
    this.checkScreenWidth();
  }

  toggleSideBar(): void{
    const sidebar = document.getElementById('sidebar');
    if(sidebar){
      sidebar.classList.toggle('sidebar-collapsed');
      document.body.classList.toggle('sidebar-expanded', !sidebar.classList.contains('sidebar-collapsed'));
    }

    this.isIconMoved = !this.isIconMoved;

    this.checkScreenWidth();
  }

  private checkScreenWidth(): void{
    const screenWidth = window.innerWidth;
    this.display = screenWidth > 750;
  }
}
