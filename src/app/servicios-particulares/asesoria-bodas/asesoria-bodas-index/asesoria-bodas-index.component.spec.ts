import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaBodasIndexComponent } from './asesoria-bodas-index.component';

describe('AsesoriaBodasIndexComponent', () => {
  let component: AsesoriaBodasIndexComponent;
  let fixture: ComponentFixture<AsesoriaBodasIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaBodasIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaBodasIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
