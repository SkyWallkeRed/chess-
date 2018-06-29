import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivGamesComponent } from './activ-games.component';

describe('ActivGamesComponent', () => {
  let component: ActivGamesComponent;
  let fixture: ComponentFixture<ActivGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
