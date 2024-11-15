import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarObservacionesComponent } from './mostrar-observaciones.component';

describe('MostrarObservacionesComponent', () => {
  let component: MostrarObservacionesComponent;
  let fixture: ComponentFixture<MostrarObservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarObservacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
