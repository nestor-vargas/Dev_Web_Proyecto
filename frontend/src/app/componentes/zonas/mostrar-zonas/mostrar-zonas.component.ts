import { Component, OnInit } from '@angular/core';
import { ZonasService } from '../../../services/zonas.service';
import { Router } from '@angular/router';
import { Zona } from '../../../models/zona';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-zona',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, CommonModule],
  templateUrl: './mostrar-zonas.component.html',
  styleUrls: ['./mostrar-zonas.component.css']
})
export class MostrarZonasComponent implements OnInit {
  public zonas: Zona[] = [];

  constructor(
    private zonaService: ZonasService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerZonas();
  }

  obtenerZonas() {
    this.zonaService.getZonas().subscribe({
      next: (data) => {
        this.zonas = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  eliminarZona(id: number): void {
    this.zonaService.deleteZona(id).subscribe(
      () => this.obtenerZonas()
    );
  }

  editarZona(id: number): void {
    this.router.navigateByUrl(`admin/zonas/edit/${id}`);
  }

  agregarZona(): void {
    this.router.navigateByUrl('admin/zonas/nueva');
  }

  volverAlAnalisis(): void {
    this.router.navigateByUrl('admin/analisis');
  }
}