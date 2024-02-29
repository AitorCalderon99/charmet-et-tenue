import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaBodasMadrinaComponent } from './asesoria-bodas-madrina.component';

describe('AsesoriaBodasMadrinaComponent', () => {
  let component: AsesoriaBodasMadrinaComponent;
  let fixture: ComponentFixture<AsesoriaBodasMadrinaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaBodasMadrinaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaBodasMadrinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
