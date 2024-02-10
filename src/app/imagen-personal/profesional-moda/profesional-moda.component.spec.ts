import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesionalModaComponent } from './profesional-moda.component';

describe('ProfesionalModaComponent', () => {
  let component: ProfesionalModaComponent;
  let fixture: ComponentFixture<ProfesionalModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfesionalModaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfesionalModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
