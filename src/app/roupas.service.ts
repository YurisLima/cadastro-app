import { Injectable } from '@angular/core';
import { Roupas } from './roupas/roupas';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RoupasService {

  constructor( private http: HttpClient ) {

   }

   salvar( Roupas: Roupas) : Observable<Roupas> {
    return this.http.post<Roupas> ('http://localhost:8080/api/controller/AdicionaCadastro', Roupas);
   }

   atualizar( Roupas: Roupas) : Observable<any> {
    return this.http.put<Roupas> (`http://localhost:8080/api/controller/Atualiza/${Roupas.id}`, Roupas);
   }

   getLista() : Observable<Roupas[]> {
    return this.http.get<Roupas[]>('http://localhost:8080/api/controller');
   }

   getRoupaById(id: number) : Observable <Roupas>{
    return this.http.get<any>(`http://localhost:8080/api/controller/${id}`);
   }

   deletar( Roupas: Roupas) : Observable<any> {
    return this.http.delete<any> (`http://localhost:8080/api/controller/Deleta/${Roupas.id}`);
   }
}
