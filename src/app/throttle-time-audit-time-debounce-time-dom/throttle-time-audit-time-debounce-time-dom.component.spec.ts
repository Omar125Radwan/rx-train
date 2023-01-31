import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThrottleTimeAuditTimeDebounceTimeDomComponent } from './throttle-time-audit-time-debounce-time-dom.component';

describe('ThrottleTimeAuditTimeDebounceTimeDomComponent', () => {
  let component: ThrottleTimeAuditTimeDebounceTimeDomComponent;
  let fixture: ComponentFixture<ThrottleTimeAuditTimeDebounceTimeDomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThrottleTimeAuditTimeDebounceTimeDomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThrottleTimeAuditTimeDebounceTimeDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
