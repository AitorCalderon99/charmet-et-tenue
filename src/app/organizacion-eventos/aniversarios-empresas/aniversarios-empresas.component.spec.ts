import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversariosEmpresasComponent } from './aniversarios-empresas.component';

describe('AniversariosEmpresasComponent', () => {
  let component: AniversariosEmpresasComponent;
  let fixture: ComponentFixture<AniversariosEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniversariosEmpresasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AniversariosEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
