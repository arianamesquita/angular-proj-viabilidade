import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsServicosComponent } from './cards-servicos/cards-servicos.component';
import { CardsComponent } from './cards-servicos/cards/cards.component';

@NgModule({
  declarations: [
    CardsServicosComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardsServicosComponent,
  ]
})
export class ServicosModule { }
