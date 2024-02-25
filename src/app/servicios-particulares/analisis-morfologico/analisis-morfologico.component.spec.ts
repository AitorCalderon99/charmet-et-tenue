import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisMorfologicoComponent } from './analisis-morfologico.component';

describe('AnalisisMorfologicoComponent', () => {
  let component: AnalisisMorfologicoComponent;
  let fixture: ComponentFixture<AnalisisMorfologicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisMorfologicoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisMorfologicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
