import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoupasFormComponent } from './roupas/roupas-form/roupas-form.component';
import { AuthGuardService } from './auth-guard.service';
import { ListaRoupaComponent } from './roupas/lista-roupa/lista-roupa.component';
import { CadastroComponent } from './login/cadastro/cadastro.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro-login', component: CadastroComponent },
  { path: 'lista/:id', component: RoupasFormComponent, canActivate: [AuthGuardService] },
  { path: 'cadastro-roupa', component: RoupasFormComponent, canActivate: [AuthGuardService] },
  { path: 'lista-roupa', component: ListaRoupaComponent, canActivate: [AuthGuardService] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
