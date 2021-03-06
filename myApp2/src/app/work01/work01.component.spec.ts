import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Work01Component } from './work01.component';

describe('Work01Component', () => {
  let component: Work01Component;
  let fixture: ComponentFixture<Work01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Work01Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Work01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
