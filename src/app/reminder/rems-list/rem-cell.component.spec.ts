import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {RemCellComponent} from './rem-cell.component';

describe('RemCellComponent', () => {
  let component: RemCellComponent;
  let fixture: ComponentFixture<RemCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RemCellComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
