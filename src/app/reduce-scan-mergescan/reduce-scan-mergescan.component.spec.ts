import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduceScanMergescanComponent } from './reduce-scan-mergescan.component';

describe('ReduceScanMergescanComponent', () => {
  let component: ReduceScanMergescanComponent;
  let fixture: ComponentFixture<ReduceScanMergescanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduceScanMergescanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduceScanMergescanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
