import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregaPremiosComponent } from './entrega-premios.component';

describe('EntregaPremiosComponent', () => {
  let component: EntregaPremiosComponent;
  let fixture: ComponentFixture<EntregaPremiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EntregaPremiosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EntregaPremiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
