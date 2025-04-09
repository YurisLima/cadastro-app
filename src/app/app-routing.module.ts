import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

const routes: Routes = [
  { path: 'roupas', component: LayoutComponent, children: [
    {path: 'login', component: LoginComponent},
    { path: 'cadastro-login', component: CadastroComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
