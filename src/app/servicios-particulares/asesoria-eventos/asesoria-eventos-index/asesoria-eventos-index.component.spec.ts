import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaEventosIndexComponent } from './asesoria-eventos-index.component';

describe('AsesoriaEventosIndexComponent', () => {
  let component: AsesoriaEventosIndexComponent;
  let fixture: ComponentFixture<AsesoriaEventosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaEventosIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaEventosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
