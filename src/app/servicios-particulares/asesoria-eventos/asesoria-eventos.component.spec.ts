import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaEventosComponent } from './asesoria-eventos.component';

describe('AsesoriaEventosComponent', () => {
  let component: AsesoriaEventosComponent;
  let fixture: ComponentFixture<AsesoriaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
