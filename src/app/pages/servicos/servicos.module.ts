import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsServicosComponent } from './cards-servicos/cards-servicos.component';
import { CardsComponent } from './cards-servicos/cards/cards.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    CardsComponent,
    CardsServicosComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule
  ],
  exports: [
    CardsServicosComponent,
  ]
})
export class ServicosModule { }
