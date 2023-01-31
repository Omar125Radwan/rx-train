import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditThrottleDebounceComponent } from './audit-throttle-debounce.component';

describe('AuditThrottleDebounceComponent', () => {
  let component: AuditThrottleDebounceComponent;
  let fixture: ComponentFixture<AuditThrottleDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditThrottleDebounceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditThrottleDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
