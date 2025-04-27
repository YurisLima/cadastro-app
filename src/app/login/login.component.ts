import { AuthService } from './../auth.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from './login';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    Usuario: Usuario;
    success: boolean = false;

  constructor(
    private router: Router,
    private toastService: ToastrService,
    private AuthService: AuthService ) {
    this.Usuario = new Usuario();
   }

  //Realiza o Login do cliente
  submit(form: NgForm) {
    if (form.invalid) {
      console.log("teste")
      // Marcar todos os campos como "tocados" para exibir as mensagens de erro
      Object.values(form.controls).forEach(control => {
        control.markAsTouched();
      });
      this.toastService.error("Preencha todos os campos obrigatórios.");
      return;
    }

    // Se válido, prossegue com o login
    this.AuthService.login(this.Usuario.email, this.Usuario.password)
      .subscribe(
        Response => {
          this.success = true;
          this.toastService.success("Login efetuado com sucesso!");
          this.router.navigate(['/cadastro-roupa']);
        },
        errorResponse => {
          this.toastService.error("Usuário ou senha inválidos.");
        }
      );
  }

}
