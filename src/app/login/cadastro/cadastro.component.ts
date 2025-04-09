import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../login';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  Usuario: Usuario;

  constructor( private router: Router, private AuthService: AuthService, private ToastrService: ToastrService) { }

  submit(){
    this.AuthService.signup(this.Usuario.name, this.Usuario.email, this.Usuario.password)
    .subscribe({
      next: () => this.ToastrService.success("Login feito com sucesso!"),
      error: () => this.ToastrService.error("Erro inesperado! Tente novamente mais tarde")
    })
  }

  login(){
    this.router.navigate(['/roupas/login']);
  }
}
