import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViabilScreenComponent } from './viabil-screen/viabil-screen.component';
import { FormsComponent } from './viabil-screen/forms/forms.component';



@NgModule({
  declarations: [
    ViabilScreenComponent,
    FormsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViabilScreenComponent
  ]
})
export class ViabilidadeModule { }
