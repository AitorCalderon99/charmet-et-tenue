import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaBodasNoviaComponent } from './asesoria-bodas-novia.component';

describe('AsesoriaBodasNoviaComponent', () => {
  let component: AsesoriaBodasNoviaComponent;
  let fixture: ComponentFixture<AsesoriaBodasNoviaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaBodasNoviaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaBodasNoviaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
