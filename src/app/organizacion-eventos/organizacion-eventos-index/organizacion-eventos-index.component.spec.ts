import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizacionEventosIndexComponent } from './organizacion-eventos-index.component';

describe('OrganizacionEventosIndexComponent', () => {
  let component: OrganizacionEventosIndexComponent;
  let fixture: ComponentFixture<OrganizacionEventosIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizacionEventosIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrganizacionEventosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
