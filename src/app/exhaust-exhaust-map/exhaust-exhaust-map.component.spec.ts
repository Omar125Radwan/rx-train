import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaustExhaustMapComponent } from './exhaust-exhaust-map.component';

describe('ExhaustExhaustMapComponent', () => {
  let component: ExhaustExhaustMapComponent;
  let fixture: ComponentFixture<ExhaustExhaustMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhaustExhaustMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhaustExhaustMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
