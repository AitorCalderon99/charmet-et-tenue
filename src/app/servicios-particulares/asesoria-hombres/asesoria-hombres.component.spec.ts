import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaHombresComponent } from './asesoria-hombres.component';

describe('AsesoriaHombresComponent', () => {
  let component: AsesoriaHombresComponent;
  let fixture: ComponentFixture<AsesoriaHombresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaHombresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaHombresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
