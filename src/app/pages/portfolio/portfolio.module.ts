import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioViewComponent } from './portfolio-view/portfolio-view.component';
import { CardsComponent } from './portfolio-view/cards/cards.component';



@NgModule({
  declarations: [
    PortfolioViewComponent,
    CardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
