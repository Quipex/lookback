import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemsListComponent } from './rems-list.component';

describe('RemsListComponent', () => {
  let component: RemsListComponent;
  let fixture: ComponentFixture<RemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
