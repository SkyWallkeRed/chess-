import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreWebLoaderComponent } from './pre-web-loader.component';

describe('PreWebLoaderComponent', () => {
  let component: PreWebLoaderComponent;
  let fixture: ComponentFixture<PreWebLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreWebLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreWebLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
