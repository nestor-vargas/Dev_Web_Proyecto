import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Credenciales } from '../models/credenciales';
import { Token } from '../models/token';
import { UsuarioI } from '../models/Usuario';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = 'http://localhost:4000/auth';

  constructor(private http: HttpClient, private router: Router) { }

  register(user: UsuarioI) {
    return this.http.post(`${this.URL}/register`, user);
  }

  login(credentials: Credenciales) {
    this.http.post<Token>(`${this.URL}/login`, credentials)
      .subscribe(
        (token) => {
        if(!token){
          alert('Usuario o contraseña incorrectos');
          return;
        }
        alert('Bienvenido');
        localStorage.setItem('authToken', token.token);
        const role = this.getRoleFromToken();
        if (role === '1') this.router.navigate(['/admin/observaciones']);
        else if (role === '2') this.router.navigate(['/observaciones']);
      });
  }

  getRoleFromToken(): string {
    const token = localStorage.getItem('authToken');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // Decodificar el JWT
      return payload.roleId;
    }
    return '';
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }
}
