// mostrar-rol.component.ts
import { Component, OnInit } from '@angular/core';
import { RolService } from '../../../services/rol.service';
import { Router } from '@angular/router';
import { RolI } from '../../../models/rol';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar-rol',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, CommonModule],
  templateUrl: './mostrar-roles.component.html',
  styleUrls: ['./mostrar-roles.component.css']
})
export class MostrarRolesComponent implements OnInit {
  public roles: RolI[] = [];

  constructor(
    private rolesService: RolService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerRoles();
  }

  obtenerRoles() {
    this.rolesService.getRoles().subscribe({
      next: (data) => {
        this.roles = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  eliminarRol(id: number): void {
    this.rolesService.deleteRol(id).subscribe(
      () => this.obtenerRoles()
    );
  }

  editarRol(id: number): void {
    this.router.navigateByUrl(`admin/roles/edit/${id}`);
  }

  agregarRol(): void {
    this.router.navigateByUrl('admin/roles/nuevo');
  }
}