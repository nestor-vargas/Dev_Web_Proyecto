// crear-rol.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RolService } from '../../../services/rol.service';
import { Router, ActivatedRoute } from '@angular/router';
import { RolI } from '../../../models/rol';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-rol',
  standalone: true,
  imports: [ReactiveFormsModule,CardModule, ButtonModule, CommonModule],
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {
  form: FormGroup;
  isEditing = false;
  id = 0;

  constructor(
    private formBuilder: FormBuilder,
    private rolesService: RolService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.cargarRol(Number(id));
      this.id = Number(id);
    }
  }

  cargarRol(id: number) {
    this.rolesService.getRol(id).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formData = this.form.value as RolI;

    if (this.isEditing) {
      this.rolesService.updateRol(this.id, formData).subscribe(() => this.router.navigateByUrl('/admin/roles'));
    } else {
      this.rolesService.createRol(formData).subscribe(() => this.router.navigateByUrl('/admin/roles'));
    }
  }

  cancel() {
    this.router.navigateByUrl('/admin/roles');
  }
}
