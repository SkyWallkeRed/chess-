import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PregameComponent } from './pregame.component';

describe('PregameComponent', () => {
  let component: PregameComponent;
  let fixture: ComponentFixture<PregameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PregameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PregameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
