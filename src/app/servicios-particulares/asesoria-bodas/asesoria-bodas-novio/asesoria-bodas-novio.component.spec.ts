import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaBodasNovioComponent } from './asesoria-bodas-novio.component';

describe('AsesoriaBodasNovioComponent', () => {
  let component: AsesoriaBodasNovioComponent;
  let fixture: ComponentFixture<AsesoriaBodasNovioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaBodasNovioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaBodasNovioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
