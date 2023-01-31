import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerRangeComponent } from './timer-range.component';

describe('TimerRangeComponent', () => {
  let component: TimerRangeComponent;
  let fixture: ComponentFixture<TimerRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerRangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
