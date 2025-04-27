import { Roupas } from './../../roupas/roupas';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { RoupasService } from 'src/app/roupas.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string | null = null;
  Roupas: Roupas[] = [];

  constructor(private router: Router, private authService: AuthService, private service: RoupasService) {
  }

  ngOnInit(): void {
    this.authService.getUserInfo().subscribe({
      next: (data) => {
        this.userName = data.name;
      },
      error: (err) => {
        console.error('Erro ao buscar usuário:', err);
        this.userName = null;
      }
    });
}

filtro: string = '';

buscar() {
  if (this.filtro.trim() === '') {
    this.service.getLista(); // carrega tudo
  } else {
    this.service.buscarPorNome(this.filtro).subscribe(data => {
      this.Roupas = data;
    });
  }
}

logout() {
  sessionStorage.removeItem('auth-token');
  location.reload()
  this.router.navigate(['']);
}

}
