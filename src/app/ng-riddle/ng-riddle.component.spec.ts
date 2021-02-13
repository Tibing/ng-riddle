import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRiddleComponent } from './ng-riddle.component';

describe('NgRiddleComponent', () => {
  let component: NgRiddleComponent;
  let fixture: ComponentFixture<NgRiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgRiddleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgRiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
