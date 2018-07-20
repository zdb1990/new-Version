import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataEchartsComponent } from './data-echarts.component';

describe('DataEchartsComponent', () => {
  let component: DataEchartsComponent;
  let fixture: ComponentFixture<DataEchartsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataEchartsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
