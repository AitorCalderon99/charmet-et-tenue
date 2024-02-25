import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaBodasComponent } from './asesoria-bodas.component';

describe('AsesoriaBodasComponent', () => {
  let component: AsesoriaBodasComponent;
  let fixture: ComponentFixture<AsesoriaBodasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaBodasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaBodasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
