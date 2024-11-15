// roles.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RolI } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  private URL = 'http://localhost:4000/rol';

  constructor(private http: HttpClient) {}

  getRoles(): Observable<RolI[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<RolI[]>(this.URL, { headers });
  }

  getRol(id: number): Observable<RolI> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<RolI>(`${this.URL}/${id}`, { headers });
  }

  createRol(rol: RolI): Observable<RolI> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.post<RolI>(this.URL, rol, { headers });
  }

  updateRol(id: number, rol: RolI): Observable<RolI> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.put<RolI>(`${this.URL}/${id}`, rol, { headers });
  }

  deleteRol(id: number): Observable<void> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.URL}/${id}`, { headers });
  }
}