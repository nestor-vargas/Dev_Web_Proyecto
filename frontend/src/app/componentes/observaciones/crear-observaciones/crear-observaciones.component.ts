import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ObservacionesService } from '../../../services/observaciones.service';
import { ZonasService } from '../../../services/zonas.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observacion, Zona } from '../../../models/observacion';
import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-observacion',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, ButtonModule, CommonModule, DropdownModule],
  templateUrl: './crear-observaciones.component.html',
  styleUrls: ['./crear-observaciones.component.css']
})
export class CrearObservacionComponent implements OnInit {
  form: FormGroup;
  zonas: any[] = [];
  isEditing = false;
  id = 0;

  constructor(private formBuilder: FormBuilder,
    private observacionService: ObservacionesService,
    private zonaService: ZonasService,
    private router: Router,
    private route: ActivatedRoute) {

    this.form = this.formBuilder.group({
      ph: ['', [Validators.required]],
      oxigeno: ['', [Validators.required]],
      amonio: ['', [Validators.required]],
      nitrito: ['', [Validators.required]],
      nitrato: ['', [Validators.required]],
      temperatura: ['', [Validators.required]],
      fecha: ['', [Validators.required]],
      zonaId: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.obtenerZonas();
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditing = true;
      this.cargarObservacion(Number(id));
      this.id = Number(id);
    }
  }

  obtenerZonas() {
    this.zonaService.getZonas().subscribe((data) => {
      data.forEach((zona: Zona) => {
        this.zonas.push({ label: zona.nombre, value: zona.id });
      })
    });
  }

  cargarObservacion(id: number) {
    this.observacionService.getObservacion(id).subscribe((data) => {
      this.form.patchValue(data);
    });
  }

  onSubmit() {
    if (this.form.invalid) return;

    const formData = this.form.value as Observacion;

    if (this.isEditing) {
      this.observacionService.updateObservacion(this.id, formData).subscribe(() => this.router.navigateByUrl('/observaciones'));
    } else {
      this.observacionService.createObservacion(formData).subscribe(() => this.router.navigateByUrl('/observaciones'));
    }
  }

  cancel() {
    this.router.navigateByUrl('/observaciones');
  }
}