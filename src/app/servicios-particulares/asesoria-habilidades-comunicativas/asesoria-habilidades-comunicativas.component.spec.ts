import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaHabilidadesComunicativasComponent } from './asesoria-habilidades-comunicativas.component';

describe('AsesoriaHabilidadesComunicativasComponent', () => {
  let component: AsesoriaHabilidadesComunicativasComponent;
  let fixture: ComponentFixture<AsesoriaHabilidadesComunicativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaHabilidadesComunicativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaHabilidadesComunicativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
