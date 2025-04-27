import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    NavbarComponent,
  ],
  providers:[
    AuthService
  ]
})
export class TemplateModule { }
