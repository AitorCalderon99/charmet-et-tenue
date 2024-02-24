import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciasComunicativasComponent } from './competencias-comunicativas.component';

describe('CompetenciasComunicativasComponent', () => {
  let component: CompetenciasComunicativasComponent;
  let fixture: ComponentFixture<CompetenciasComunicativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompetenciasComunicativasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompetenciasComunicativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
