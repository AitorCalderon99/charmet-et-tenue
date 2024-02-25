import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenPersonalIndexComponent } from './imagen-personal-index.component';

describe('ImagenPersonalIndexComponent', () => {
  let component: ImagenPersonalIndexComponent;
  let fixture: ComponentFixture<ImagenPersonalIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagenPersonalIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImagenPersonalIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
