// mostrar-usuarios.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioI } from '../../../models/Usuario';
import { UsuariosService } from '../../../services/usuario.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-mostrar-usuarios',
  standalone: true,
  imports: [TableModule, ButtonModule, CardModule, CommonModule],
  templateUrl: './mostrar-usuarios.component.html',
  styleUrls: ['./mostrar-usuarios.component.css']
})
export class MostrarUsuariosComponent implements OnInit {
  public usuarios: UsuarioI[] = [];
  public isAdmin: boolean = false;

  constructor(
    private usuariosService: UsuariosService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.isAdmin = this.authService.getRoleFromToken() == '1' ? true : false;
  }

  obtenerUsuarios() {
    this.usuariosService.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
      }
    );
  }

  eliminarUsuario(id: number): void {
    this.usuariosService.deleteUsuario(id).subscribe(
      () => this.obtenerUsuarios()
    );
  }

  editarUsuario(id: number): void {
      this.router.navigateByUrl(`/admin/usuarios/edit/${id}`);
  }

  agregarUsuario(): void {
      this.router.navigateByUrl('/admin/usuarios/nuevo');
  }

  getRole(id: string){
    if(id == '1'){
      return 'Administrador';
    } else {
      return 'Observador';
  }
}
}