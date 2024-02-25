import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciacionModaComponent } from './iniciacion-moda.component';

describe('IniciacionModaComponent', () => {
  let component: IniciacionModaComponent;
  let fixture: ComponentFixture<IniciacionModaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IniciacionModaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IniciacionModaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
