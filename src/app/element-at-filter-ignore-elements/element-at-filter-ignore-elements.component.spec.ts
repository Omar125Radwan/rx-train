import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAtFilterIgnoreElementsComponent } from './element-at-filter-ignore-elements.component';

describe('ElementAtFilterIgnoreElementsComponent', () => {
  let component: ElementAtFilterIgnoreElementsComponent;
  let fixture: ComponentFixture<ElementAtFilterIgnoreElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElementAtFilterIgnoreElementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAtFilterIgnoreElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
