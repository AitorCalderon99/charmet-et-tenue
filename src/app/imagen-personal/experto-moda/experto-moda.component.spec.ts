import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertoModaComponent } from './experto-moda.component';

describe('ExpertoModaComponent', () => {
  let component: ExpertoModaComponent;
  let fixture: ComponentFixture<ExpertoModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpertoModaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpertoModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
