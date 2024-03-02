import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaEventosAnfitrionComponent } from './asesoria-eventos-anfitrion.component';

describe('AsesoriaEventosAnfitrionComponent', () => {
  let component: AsesoriaEventosAnfitrionComponent;
  let fixture: ComponentFixture<AsesoriaEventosAnfitrionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaEventosAnfitrionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaEventosAnfitrionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
