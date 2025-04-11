import { AuthService } from './../auth.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    Usuario: Usuario;
    loginError: boolean;
    cadastrando: boolean;
    success: boolean = false;
    error: String[];

  constructor(
    private router: Router,
    private toastService: ToastrService,
    private AuthService: AuthService ) {
    this.Usuario = new Usuario();
   }


  submit(){
    this.AuthService.login(this.Usuario.email, this.Usuario.password)
    .subscribe ( Response => {
      this.success = true,
      this.toastService.success("Login efetuado com sucesso!"),
      this.router.navigate(['roupas/lista-roupa']);
    }, errorResponse =>{
      this.error = ['Erro ao atualizar o cliente.']
    })
  }

  preparaCadastrar(event: { preventDefault: () => void; }){
    event.preventDefault();
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  cadastro(){
    this.router.navigate(['roupas/cadastro-login']);
  }

}
