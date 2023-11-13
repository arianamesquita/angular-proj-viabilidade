import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SlidesComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    SlidesComponent
  ]
})
export class HomeModule { }
