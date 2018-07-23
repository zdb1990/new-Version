import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsContentComponent } from './charts-content.component';

describe('ChartsContentComponent', () => {
  let component: ChartsContentComponent;
  let fixture: ComponentFixture<ChartsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
