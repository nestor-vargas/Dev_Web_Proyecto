import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Zona } from '../models/zona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonasService {
  private URL = 'http://localhost:4000/zona';

  constructor(private http: HttpClient, private router: Router) {}

  getZonas(): Observable<Zona[]> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Zona[]>(this.URL, { headers });
  }

  getZona(id: number): Observable<Zona> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get<Zona>(`${this.URL}/${id}`, { headers });
  }

  createZona(zona: Zona): Observable<Zona> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.post<Zona>(this.URL, zona, { headers });
  }

  updateZona(id: number, zona: Zona): Observable<Zona> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
    return this.http.put<Zona>(`${this.URL}/${id}`, zona, { headers });
  }

  deleteZona(id: number): Observable<void> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.delete<void>(`${this.URL}/${id}`, { headers });
  }
}