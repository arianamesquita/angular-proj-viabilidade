import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './cards/cards.component';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [
    CardsComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent
  ]
})
export class SideBarModule{

}
