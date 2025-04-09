import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateModule } from './template/template.module';
import { RoupasRoutingModule } from './roupas/roupas-routing.module';
import { FormsModule } from '@angular/forms';
import { RoupasModule } from './roupas/roupas.module';
import { RoupasService } from './roupas.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';
import { AuthService } from './auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TemplateModule,
    RoupasModule,
    LoginModule,
    RoupasRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    RoupasService,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
