import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoupasFormComponent } from './roupas-form/roupas-form.component';
import { ListaRoupaComponent } from './lista-roupa/lista-roupa.component';
import { LayoutComponent } from '../layout/layout.component';

const routes: Routes = [
  {path: 'roupas' , component: LayoutComponent, children: [
  { path: 'cadastro-roupa', component: RoupasFormComponent },
  { path: 'cadastro-roupa/:id', component: RoupasFormComponent },
  { path: 'lista-roupa', component: ListaRoupaComponent }]}
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoupasRoutingModule { }
