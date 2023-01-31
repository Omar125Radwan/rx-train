import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleSampleTimeComponent } from './sample-sample-time.component';

describe('SampleSampleTimeComponent', () => {
  let component: SampleSampleTimeComponent;
  let fixture: ComponentFixture<SampleSampleTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleSampleTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleSampleTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
