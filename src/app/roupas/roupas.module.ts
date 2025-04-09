import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoupasRoutingModule } from './roupas-routing.module';
import { RoupasFormComponent } from './roupas-form/roupas-form.component';
import { FormsModule } from '@angular/forms';
import { ListaRoupaComponent } from './lista-roupa/lista-roupa.component';


@NgModule({
  declarations: [
    RoupasFormComponent,
    ListaRoupaComponent
  ],
  imports: [
    CommonModule,
    RoupasRoutingModule,
    FormsModule
  ], exports: [
    RoupasFormComponent,
    ListaRoupaComponent
  ]
})
export class RoupasModule { }
