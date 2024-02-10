import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioStepComponent } from './cambio-step.component';

describe('CambioStepComponent', () => {
  let component: CambioStepComponent;
  let fixture: ComponentFixture<CambioStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CambioStepComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CambioStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
