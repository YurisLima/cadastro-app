import { Component, OnInit } from '@angular/core';
import { Roupas } from '../roupas';
import { RoupasService } from 'src/app/roupas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-roupas-form',
  templateUrl: './roupas-form.component.html',
  styleUrls: ['./roupas-form.component.css']
})
export class RoupasFormComponent implements OnInit {

  Roupas: Roupas;
  success: boolean = false;
  error: String[];
  id: number;

  constructor( private service : RoupasService,
               private router : Router,
               private activatedRoute : ActivatedRoute,
               private toastService: ToastrService ) {
    this.Roupas = new Roupas();
  }


  ngOnInit(): void {
    let params = this.activatedRoute.params
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      this.service
      .getRoupaById(this.id)
      .subscribe(
        response => {this.Roupas = response
        },
        errorResponse => {this.Roupas = new Roupas()
        }
      )
    })
  }

//Atualiza e salva o registo
  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.Roupas)
      .subscribe ( Response => {
        this.success = true,
        this.toastService.success("Cadastro Atualizado !"),
        this.router.navigate(['/lista-roupa']);
      }, errorResponse =>{
        this.toastService.error("Erro ao atualizar o cliente.")
      })
    } else {
    this.service.salvar(this.Roupas)
    .subscribe ( Response => {
      this.success = true,
      this.toastService.success("O cadastro foi realizado com sucesso"),
      this.router.navigate(['/lista-roupa']);
    }, errorResponse => {
      this.toastService.error("Erro inesperado")
    })
  }

  }
}
