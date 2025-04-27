import { RoupasService } from 'src/app/roupas.service';
import { Roupas } from './../roupas';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-roupa',
  templateUrl: './lista-roupa.component.html',
  styleUrls: ['./lista-roupa.component.css']
})
export class ListaRoupaComponent implements OnInit {

  Roupas: any[] = []; // Lista original
  RoupasFiltradas: any[] = []; // Lista para os resultados da busca
  filtro: string = '';

  roupaSelecionada: Roupas;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor(private service: RoupasService, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.service
      .getLista()
      .subscribe( resposta => this.Roupas = resposta);
  }

  preparaDelecao(roupa: Roupas){
    this.roupaSelecionada = roupa;
  }
    deletarCliente(){
    this.service
    .deletar(this.roupaSelecionada)
    .subscribe(
      Response => {this.toastService.success("Cliente deletado com sucesso"),
                   this.ngOnInit();},
      erro => this.toastService.success("Ocorreu um erro ao deletar o cliente")
    )
  }

  buscar() {
    if (this.filtro.trim() === '') {
      this.service.getLista()
      .subscribe( resposta => this.Roupas = resposta);
      // carrega tudo
    } else {
      this.service.buscarPorNome(this.filtro).subscribe(data => {
        this.Roupas = data;
      });
    }
  }
}
