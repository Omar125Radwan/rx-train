import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeIntervalTimeoutTimeoutWithTimestampComponent } from './time-interval-timeout-timeout-with-timestamp.component';

describe('TimeIntervalTimeoutTimeoutWithTimestampComponent', () => {
  let component: TimeIntervalTimeoutTimeoutWithTimestampComponent;
  let fixture: ComponentFixture<TimeIntervalTimeoutTimeoutWithTimestampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeIntervalTimeoutTimeoutWithTimestampComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeIntervalTimeoutTimeoutWithTimestampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
