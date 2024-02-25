import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyStylingComponent } from './healthy-styling.component';

describe('HealthyStylingComponent', () => {
  let component: HealthyStylingComponent;
  let fixture: ComponentFixture<HealthyStylingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HealthyStylingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HealthyStylingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
