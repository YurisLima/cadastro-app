import { Usuario } from './login/login';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { LoginResponse } from './types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

     login(email: string, password: string){
      return this.http.post<LoginResponse>("http://localhost:8080/auth/login", {email, password}).pipe(
        tap((value) => {
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("username", value.name)
        })
      )
    }

    signup(name: string, email: string, password: string){
      return this.http.post<LoginResponse>("http://localhost:8080/auth/register", { name, password, email }).pipe(
        tap((value) => {
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("username", value.name)
        })
      )
    }

    getUserInfo(): Observable<any> {
      const token = sessionStorage.getItem('auth-token'); // pega o token salvo após login
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get("http://localhost:8080/auth/user", { headers });
    }


    logout() {
      // Aqui você pode limpar o token, redirecionar, etc.
      sessionStorage.removeItem('auth-token'); // ou o que você usa
    }

    //Verifica se o usuario esta logado
    isAuthenticated() : boolean {
      return true;
    }
}

