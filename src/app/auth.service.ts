import { Usuario } from './login/login';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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
      return this.http.post<LoginResponse>("http://localhost:8080/auth/register", { name, email, password }).pipe(
        tap((value) => {
          sessionStorage.setItem("auth-token", value.token)
          sessionStorage.setItem("username", value.name)
        })
      )
    }
}
