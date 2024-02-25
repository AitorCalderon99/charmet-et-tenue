import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierdeElMiedoComponent } from './pierde-el-miedo.component';

describe('PierdeElMiedoComponent', () => {
  let component: PierdeElMiedoComponent;
  let fixture: ComponentFixture<PierdeElMiedoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PierdeElMiedoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PierdeElMiedoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
