import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingPlannerComponent } from './wedding-planner.component';

describe('WeddingPlannerComponent', () => {
  let component: WeddingPlannerComponent;
  let fixture: ComponentFixture<WeddingPlannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeddingPlannerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeddingPlannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
