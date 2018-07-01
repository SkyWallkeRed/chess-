import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreGameAnimationComponent } from './pre-game-animation.component';

describe('PreGameAnimationComponent', () => {
  let component: PreGameAnimationComponent;
  let fixture: ComponentFixture<PreGameAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreGameAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreGameAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
