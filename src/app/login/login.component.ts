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

  constructor(
    private router: Router,
    private toastService: ToastrService,
    private AuthService: AuthService ) {
    this.Usuario = new Usuario();
   }

   showSuccess() {
    this.toastService.success('Hello world!', 'Toastr fun!');
  }

  submit(){
    this.AuthService.login(this.Usuario.email, this.Usuario.password)
    .subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
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
    this.router.navigate(['/roupas/cadastro-login']);
  }

}
