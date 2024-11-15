import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observacion } from '../models/observacion';

@Injectable({
  providedIn: 'root'
})
export class ObservacionesService {
  URL = 'http://localhost:4000/observacion';
  

  constructor(private http: HttpClient, private router: Router) { }

  // Obtener todas las observaciones
  getObservaciones(){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`  // Agregar el token al header
    });
    return this.http.get<Observacion[]>(`${this.URL}`, {headers});
  }

  // Obtener una observación por ID
  getObservacion(id: number){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`  // Agregar el token al header
    });
    return this.http.get<Observacion>(`${this.URL}/${id}`, {headers});
  }

  // Crear una nueva observación
  createObservacion(observacion: Observacion){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' 
    });
    return this.http.post<Observacion>(`${this.URL}`, observacion, {headers});
  }

  // Actualizar una observación existente
  updateObservacion(id: number, observacion: Observacion){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json' 
    });
    return this.http.put<Observacion>(`${this.URL}/${id}`, observacion, {headers});
  }

  // Eliminar una observación
  deleteObservacion(id: number){
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`  // Agregar el token al header
    });
    return this.http.delete<void>(`${this.URL}/${id}`, {headers});
  }
}