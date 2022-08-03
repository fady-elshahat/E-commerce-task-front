import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutEcommComponent } from './layout-ecomm.component';

describe('LayoutEcommComponent', () => {
  let component: LayoutEcommComponent;
  let fixture: ComponentFixture<LayoutEcommComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutEcommComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutEcommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
