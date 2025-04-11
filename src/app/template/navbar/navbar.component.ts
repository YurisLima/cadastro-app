import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userName: string | null = null;

  constructor(private router: Router, private authService: AuthService) { }

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



  logout() {
    this.authService.logout(); // remove token
    this.router.navigate(['/roupas/login']);
  }

}
