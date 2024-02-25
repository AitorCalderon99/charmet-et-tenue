import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosParticularesComponent } from './servicios-particulares.component';

describe('ServiciosParticularesComponent', () => {
  let component: ServiciosParticularesComponent;
  let fixture: ComponentFixture<ServiciosParticularesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosParticularesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosParticularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
