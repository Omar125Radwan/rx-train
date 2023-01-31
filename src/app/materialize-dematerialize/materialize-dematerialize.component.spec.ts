import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterializeDematerializeComponent } from './materialize-dematerialize.component';

describe('MaterializeDematerializeComponent', () => {
  let component: MaterializeDematerializeComponent;
  let fixture: ComponentFixture<MaterializeDematerializeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterializeDematerializeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterializeDematerializeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
