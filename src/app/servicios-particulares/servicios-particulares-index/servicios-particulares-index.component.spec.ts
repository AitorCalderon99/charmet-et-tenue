import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosParticularesIndexComponent } from './servicios-particulares-index.component';

describe('ServiciosParticularesIndexComponent', () => {
  let component: ServiciosParticularesIndexComponent;
  let fixture: ComponentFixture<ServiciosParticularesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosParticularesIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosParticularesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
