import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InaguracionesComponent } from './inaguraciones.component';

describe('InaguracionesComponent', () => {
  let component: InaguracionesComponent;
  let fixture: ComponentFixture<InaguracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InaguracionesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InaguracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
