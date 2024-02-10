import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaBellezaComponent } from './asesoria-belleza.component';

describe('AsesoriaBellezaComponent', () => {
  let component: AsesoriaBellezaComponent;
  let fixture: ComponentFixture<AsesoriaBellezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsesoriaBellezaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsesoriaBellezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
