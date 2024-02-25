import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPersonalComponent } from './imagen-personal.component';

describe('ImagenPersonalComponent', () => {
  let component: ImagenPersonalComponent;
  let fixture: ComponentFixture<ImagenPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenPersonalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
