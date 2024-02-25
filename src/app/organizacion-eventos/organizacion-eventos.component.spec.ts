import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionEventosComponent } from './organizacion-eventos.component';

describe('OrganizacionEventosComponent', () => {
  let component: OrganizacionEventosComponent;
  let fixture: ComponentFixture<OrganizacionEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionEventosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizacionEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
