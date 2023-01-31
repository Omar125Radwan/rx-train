import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEventPluckEmptyComponent } from './form-event-pluck-empty.component';

describe('FormEventPluckEmptyComponent', () => {
  let component: FormEventPluckEmptyComponent;
  let fixture: ComponentFixture<FormEventPluckEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEventPluckEmptyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEventPluckEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
