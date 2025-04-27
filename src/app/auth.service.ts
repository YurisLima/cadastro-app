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

    //Pega o usuario logado e apresenta o username do cabeçalho
    getUserInfo(): Observable<any> {
      const token = sessionStorage.getItem('auth-token'); // pega o token salvo após login
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

      return this.http.get("http://localhost:8080/auth/user", { headers });
    }

    setToken(token: string) {
      sessionStorage.setItem('auth-token', token);
    }

    isAuthenticated(): boolean {
      return !!sessionStorage.getItem('auth-token');
    }

}

