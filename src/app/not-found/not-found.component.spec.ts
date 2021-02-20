import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NotFoundComponent } from './not-found.component';

describe('NotFoundComponent', () => {
  let component: NotFoundComponent;
  let fixture: ComponentFixture<NotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have heading', () => {
    const heading: DebugElement = fixture.debugElement.query(By.css('h1'));

    expect(heading).toBeTruthy();
  });

  it('should have proper not found text', () => {
    const heading: DebugElement = fixture.debugElement.query(By.css('h1'));

    expect(heading.nativeElement.textContent).toBe('Not Found :(');
  });

  it('should have proper not found text', () => {
    const heading: DebugElement = fixture.debugElement.query(By.css('h1'));

    expect(heading.nativeElement.textContent).toBe('Not Found :(');
  });
});
