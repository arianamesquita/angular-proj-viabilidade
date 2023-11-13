import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeModule } from './pages/home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresaModule } from './pages/empresa/empresa.module';
import { LoginModule } from './pages/login/login.module';
import { ViabilidadeModule } from './pages/viabilidade/viabilidade.module';
import { ServicosModule } from './pages/servicos/servicos.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    NgbModule,
    HomeModule,
    BrowserAnimationsModule,
    EmpresaModule,
    LoginModule,
    ViabilidadeModule,
    ServicosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
