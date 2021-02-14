import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { PostComponent } from './post.component';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { posts } from '../posts/posts.component';

class ActivatedRouteMock {

  constructor(private paramValue?: string) {
  }

  get snapshot(): any {
    // tslint:disable-next-line:no-non-null-assertion
    const paramValue: string = this.paramValue!;
    return {
      get paramMap(): Partial<ParamMap> {
        return {
          get: (param: string) => paramValue,
        };
      }
    };
  }
}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [PostComponent],
    });
  });

  it('should create', async () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock() });
    await TestBed.compileComponents();
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  for (let i = 0; i < posts.length; i++) {
    it('should render selected post id', async () => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock(i.toString()) });
      fixture = TestBed.createComponent(PostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const selectedPostId: DebugElement = fixture.debugElement.query(By.css('p'));

      expect(selectedPostId.nativeElement.textContent).toBe(`Selected Post ID: ${i}`);
    });
  }
});
