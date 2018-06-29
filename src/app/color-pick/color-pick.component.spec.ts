import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPickComponent } from './color-pick.component';

describe('ColorPickComponent', () => {
  let component: ColorPickComponent;
  let fixture: ComponentFixture<ColorPickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorPickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
