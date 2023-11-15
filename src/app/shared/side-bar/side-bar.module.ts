import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SideBarComponent } from './side-bar.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CardsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule{

}
