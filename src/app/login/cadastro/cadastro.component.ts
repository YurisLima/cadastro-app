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
  success: boolean = false;
  error: String[];

  constructor( private router: Router, private AuthService: AuthService, private ToastrService: ToastrService) {
    this.Usuario = new Usuario();
   }

  submit(){
    console.log("teste")
    this.AuthService.signup(this.Usuario.name, this.Usuario.email, this.Usuario.password)
    .subscribe ( Response => {
      this.success = true,
      this.ToastrService.success("Cadastro realizado com sucesso!"),
      this.router.navigate(['roupas/lista-roupa']);
    }, errorResponse =>{
      this.error = ['Erro ao atualizar o cliente.']
    })
  }

  login(){
    this.router.navigate(['/roupas/cadastro-login']);
  }
}
