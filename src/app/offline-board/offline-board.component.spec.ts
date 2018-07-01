import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineBoardComponent } from './offline-board.component';

describe('OfflineBoardComponent', () => {
  let component: OfflineBoardComponent;
  let fixture: ComponentFixture<OfflineBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfflineBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfflineBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
