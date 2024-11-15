import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ZonasService } from '../../../services/zonas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Zona } from '../../../models/zona';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-zona',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, ButtonModule, CommonModule],
  templateUrl: './crear-zonas.component.html',
  styleUrls: ['./crear-zonas.component.css']
})
export class CrearZonasComponent implements OnInit {
  form: FormGroup;
  isEditing = false;
  id = 0;

  constructor(private formBuilder: FormBuilder,
    private zonaService: ZonasService,
    private router: Router,
    private route: ActivatedRoute) {

    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      ubicacion: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.cargarZona(Number(id));
      this.id = Number(id);
    }
  }

  cargarZona(id: number) {
    this.zonaService.getZona(id).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formData = this.form.value as Zona;

    if (this.isEditing) {
      this.zonaService.updateZona(this.id, formData).subscribe(() => this.router.navigateByUrl('/admin/zonas'));
    } else {
      this.zonaService.createZona(formData).subscribe(() => this.router.navigateByUrl('/admin/zonas'));
    }
  }

  cancel() {
    this.router.navigateByUrl('admin/zonas');
  }
}