import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotWarmColdComponent } from './hot-warm-cold.component';

describe('HotWarmColdComponent', () => {
  let component: HotWarmColdComponent;
  let fixture: ComponentFixture<HotWarmColdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotWarmColdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotWarmColdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
