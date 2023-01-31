import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PairwiseStartWithComponent } from './pairwise-start-with.component';

describe('PairwiseStartWithComponent', () => {
  let component: PairwiseStartWithComponent;
  let fixture: ComponentFixture<PairwiseStartWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PairwiseStartWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PairwiseStartWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
