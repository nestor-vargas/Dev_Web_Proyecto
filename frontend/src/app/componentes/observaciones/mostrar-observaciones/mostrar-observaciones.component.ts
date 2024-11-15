// mostrar-observacion.component.ts
import { Component, OnInit } from '@angular/core';
import { ObservacionesService } from '../../../services/observaciones.service';
import { Router } from '@angular/router';
import { Observacion } from '../../../models/observacion';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mostrar-observacion',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, CommonModule],
  templateUrl: './mostrar-observaciones.component.html',
  styleUrls: ['./mostrar-observaciones.component.css']
})
export class MostrarObservacionComponent implements OnInit {
  public observaciones: Observacion[] = [];
  public isAdmin: boolean = false;

  constructor(
    private observacionService: ObservacionesService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerObservaciones();
    this.isAdmin = this.authService.getRoleFromToken() == '1' ? true : false;
  }

  obtenerObservaciones() {
    this.observacionService.getObservaciones().subscribe({
      next: (data) => {
        this.observaciones = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  eliminarObservacion(id: number): void {
    this.observacionService.deleteObservacion(id).subscribe(
      () => this.obtenerObservaciones(),
      (err) => console.error(err)
    );
  }

  editarObservacion(id: number): void {
    if(this.isAdmin) {
      this.router.navigateByUrl(`/admin/observaciones/edit/${id}`);
      return;
    }
    this.router.navigateByUrl(`/observaciones/edit/${id}`);
  }

  agregarObservacion(): void {
    if(this.isAdmin) {
      this.router.navigateByUrl('/admin/observaciones/nueva');
      return;
    }
    this.router.navigateByUrl('/observaciones/nueva');
  }

  cerrarSesion(){
    this.router.navigateByUrl('/login');
    localStorage.removeItem('authToken');
  }
}
