import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarZonasComponent } from './mostrar-zonas.component';

describe('MostrarZonasComponent', () => {
  let component: MostrarZonasComponent;
  let fixture: ComponentFixture<MostrarZonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostrarZonasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MostrarZonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
