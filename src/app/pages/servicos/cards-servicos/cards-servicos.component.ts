import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface EstudosViabilidade{
  apelidoTerreno: string;
  apelidoTipologia: string;
  num_UH_estudo: number;
}

const ESTUDOS_MASSA: EstudosViabilidade[] = [
  {apelidoTerreno: 'Amambaí' , apelidoTipologia: 'Torre A', num_UH_estudo: 324},
  {apelidoTerreno: 'Planalto' , apelidoTipologia: 'Torre G', num_UH_estudo: 256},
  {apelidoTerreno: 'São Francisco' , apelidoTipologia: 'Bloco H', num_UH_estudo: 304},
  {apelidoTerreno: 'Cruzeiro' , apelidoTipologia: 'Torre C', num_UH_estudo: 312},
  {apelidoTerreno: 'Jd. dos Estados' , apelidoTipologia: 'Torre G', num_UH_estudo: 320},
  {apelidoTerreno: 'Seminário' , apelidoTipologia: 'Bloco H', num_UH_estudo: 480},
  {apelidoTerreno: 'Monte Castelo' , apelidoTipologia: 'Bloco H', num_UH_estudo: 640},
  {apelidoTerreno: 'Parati' , apelidoTipologia: 'Bloco H', num_UH_estudo: 320},
  {apelidoTerreno: 'Moreninhas' , apelidoTipologia: 'Bloco H', num_UH_estudo: 512},
  {apelidoTerreno: 'Pioneiros' , apelidoTipologia: 'Bloco H', num_UH_estudo: 524}
];


@Component({
  selector: 'app-cards-servicos',
  templateUrl: './cards-servicos.component.html',
  styleUrls: ['./cards-servicos.component.css'],
})
export class CardsServicosComponent {

  cadastrarTerreno: string = 'CADASTRAR TERRENO'; // naturepeople -->nature_people landscape-->landscape add-location
  adicionar: string = 'add_box'; //ícone cidade --> location_city storemall-->store_mall_directory map-icon--> map

  cadastrarTipologia: string = 'CADASTRAR TIPOLOGIA'; // naturepeople -->nature_people landscape-->landscape add-location
  tipoTerreno: string = 'store_mall_directory'; //ícone cidade --> location_city storemall-->store_mall_directory map-icon--> map

  consultar: string = 'CONSULTAR'; // naturepeople -->nature_people landscape-->landscape add-location
  tipoPesquisar: string = 'file_copy'; //ícone cidade --> location_city storemall-->store_mall_directory map-icon--> map

  atualizar: string = 'ATUALIZAR VIABILIDADE'; // naturepeople -->nature_people landscape-->landscape add-location
  grafico: string = 'poll'; //ícone cidade --> location_city storemall-->store_mall_directory

  display: boolean = true;

  constructor( private router: Router ){
    this.router.events.subscribe((val) => {
      this.display = this.router.url.includes('servicos');
    });
  }

  redirect(action: string){
    if(action === 'CADASTRAR TERRENO' || action === 'CADASTRAR TIPOLOGIA'){
      this.router.navigate(['/viabilidade']);
    } else if (action === 'CONSULTAR' || action === 'ATUALIZAR VIABILIDADE'){
      this.router.navigate(['/login']);
    }
  }

  //configurações da Table agora

  displayedColumns: string[] = [ 'apelidoTerreno', 'apelidoTipologia', 'num_UH_estudo' ];
  dataSource = ESTUDOS_MASSA;

}

