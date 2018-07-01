import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivUsersComponent } from './activ-users.component';

describe('ActivUsersComponent', () => {
  let component: ActivUsersComponent;
  let fixture: ComponentFixture<ActivUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
