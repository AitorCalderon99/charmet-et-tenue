import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAdviseComponent } from './legal-advise.component';

describe('LegalAdviseComponent', () => {
  let component: LegalAdviseComponent;
  let fixture: ComponentFixture<LegalAdviseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalAdviseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalAdviseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
