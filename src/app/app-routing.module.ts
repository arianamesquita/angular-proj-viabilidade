import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './pages/home/home.module';
import { LoginModule } from './pages/login/login.module';
import { ServicosModule } from './pages/servicos/servicos.module';
import { EmpresaModule } from './pages/empresa/empresa.module';
import { PortfolioModule } from './pages/portfolio/portfolio.module';
import { ViabilidadeModule } from './pages/viabilidade/viabilidade.module';


const routes: Routes = [
  { path: 'home', loadChildren: () => HomeModule, pathMatch:'full' },
  { path: 'login', loadChildren: () => LoginModule },
  { path: 'servicos', loadChildren: () => ServicosModule },
  { path: 'empresa', loadChildren: () => EmpresaModule },
  { path: 'portfolio', loadChildren: () => PortfolioModule },
  { path: 'viabilidade', loadChildren: () => ViabilidadeModule },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
