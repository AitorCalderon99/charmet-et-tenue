import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriasVipComponent } from './convocatorias-vip.component';

describe('ConvocatoriasVipComponent', () => {
  let component: ConvocatoriasVipComponent;
  let fixture: ComponentFixture<ConvocatoriasVipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvocatoriasVipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConvocatoriasVipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
