import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viabil-screen',
  templateUrl: './viabil-screen.component.html',
  styleUrls: ['./viabil-screen.component.css']
})
export class ViabilScreenComponent {
  //componentes à direita
  apelido: string = 'APELIDO';
  endereco: string = 'ENDEREÇO';
  etapa: string = 'ETAPA';
  areaConstruida: string = 'ÁREA CONSTRUÍDA';
  qtddAndares: string = 'QUANTIDADE DE ANDARES';
  qtddVagasUH: string = 'QUANTIDADE DE VAGAS POR UH';
  qtddUHAndar: string = 'QUANTIDADE DE UH POR ANDAR';
  //componentes à esquerda
  coefAproveitamento: string = 'COEFICIENTE DE APROVEITAMENTO';
  taxaOcupacao: string = 'TAXA DE OCUPAÇÃO';
  indiceElevacao: string = 'ÍNDICE DE ELEVAÇÃO';

  display: boolean = true;

  constructor( private router: Router ){
    this.router.events.subscribe((val) => {
      this.display = this.router.url.includes('viabilidade');
    });
  }
}
