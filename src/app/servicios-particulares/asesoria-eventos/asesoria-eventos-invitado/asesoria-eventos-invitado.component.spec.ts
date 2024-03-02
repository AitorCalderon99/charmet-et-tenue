import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaEventosInvitadoComponent } from './asesoria-eventos-invitado.component';

describe('AsesoriaEventosInvitadoComponent', () => {
  let component: AsesoriaEventosInvitadoComponent;
  let fixture: ComponentFixture<AsesoriaEventosInvitadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaEventosInvitadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaEventosInvitadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
