// crear-usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsuarioI } from '../../../models/Usuario';
import { UsuariosService } from '../../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-usuario',
  standalone: true,
  imports: [DropdownModule, CardModule, ButtonModule, CommonModule, ReactiveFormsModule],
  templateUrl: './crear-usuarios.component.html',
  styleUrls: ['./crear-usuarios.component.css']
})
export class CrearUsuariosComponent implements OnInit {
  form: FormGroup;
  isEditing = false;
  id = 0;
  roles: { label: string, value: number }[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      roleId: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.cargarRoles();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.cargarUsuario(Number(id));
      this.id = Number(id);
    }
  }

  cargarRoles() {
    this.roles = [
      { label: 'Administrador', value: 1 },
      { label: 'Observador', value: 2 }
    ];
  }

  cargarUsuario(id: number) {
    this.usuariosService.getUsuario(id).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formData = this.form.value as UsuarioI;

    if (this.isEditing) {
      this.usuariosService.updateUsuario(this.id, formData).subscribe(() => this.router.navigateByUrl('/admin/usuarios'));
    } else {
      this.usuariosService.createUsuario(formData).subscribe(() => this.router.navigateByUrl('/admin/usuarios'));
    }
  }

  cancel() {
    this.router.navigateByUrl('/admin/usuarios');
  }
}