import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSliderComponent } from './new-slider.component';

describe('NewSliderComponent', () => {
  let component: NewSliderComponent;
  let fixture: ComponentFixture<NewSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
