import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperSliderComponent } from './wrapper-slider.component';

describe('WrapperSliderComponent', () => {
  let component: WrapperSliderComponent;
  let fixture: ComponentFixture<WrapperSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WrapperSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WrapperSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
