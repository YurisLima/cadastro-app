import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';
import { RoupasFormComponent } from './roupas/roupas-form/roupas-form.component';
import { AuthGuardService } from './auth-guard.service';

const routes: Routes = [
  { path: 'roupas', component: LayoutComponent, children: [
    {path: 'login', component: LoginComponent},
    { path: 'cadastro-login', component: CadastroComponent },
    { path: 'cadastro-roupa', component: RoupasFormComponent, canActivate : [AuthGuardService] }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
