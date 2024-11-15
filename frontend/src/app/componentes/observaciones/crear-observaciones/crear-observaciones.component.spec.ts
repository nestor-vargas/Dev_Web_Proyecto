import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearObservacionesComponent } from './crear-observaciones.component';

describe('CrearObservacionesComponent', () => {
  let component: CrearObservacionesComponent;
  let fixture: ComponentFixture<CrearObservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearObservacionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CrearObservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
