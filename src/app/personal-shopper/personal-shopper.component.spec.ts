import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalShopperComponent } from './personal-shopper.component';

describe('PersonalShopperComponent', () => {
  let component: PersonalShopperComponent;
  let fixture: ComponentFixture<PersonalShopperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalShopperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonalShopperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
