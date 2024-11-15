// usuarios.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuarioI } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private URL = 'http://localhost:4000/user';

  constructor(private http: HttpClient) {}

  getUsuarios(){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<UsuarioI[]>(this.URL, { headers });
  }

  getUsuario(id: number){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<UsuarioI>(`${this.URL}/${id}`, { headers });
  }

  createUsuario(usuario: UsuarioI){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<UsuarioI>(this.URL, usuario, { headers });
  }

  updateUsuario(id: number, usuario: UsuarioI){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put<UsuarioI>(`${this.URL}/${id}`, usuario, { headers });
  }

  deleteUsuario(id: number){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.URL}/${id}`, { headers });
  }
}