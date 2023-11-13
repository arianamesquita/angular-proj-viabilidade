import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarModule } from './side-bar/side-bar.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule,
    SideBarModule,
    MatIconModule
  ],
  exports: [
    TopBarComponent,
    SideBarModule
  ]
})
export class SharedModule { }
