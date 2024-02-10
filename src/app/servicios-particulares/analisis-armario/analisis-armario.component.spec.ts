import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisArmarioComponent } from './analisis-armario.component';

describe('AnalisisArmarioComponent', () => {
  let component: AnalisisArmarioComponent;
  let fixture: ComponentFixture<AnalisisArmarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalisisArmarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisArmarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
