import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostComponent } from './post.component';
import { loremIpsum, posts } from '../posts.mock';
import { Post, PostContent } from '../post.service';

class ActivatedRouteMock {

  constructor(private postId?: string) {
  }

  get data(): Observable<any> {
    // tslint:disable-next-line:no-non-null-assertion
    const postId: string = this.postId!;

    return of({
      get postContent(): PostContent {
        const post: Post | undefined = posts.find((p: Post) => p.id === postId);

        if (!post) {
          return { title: `Can't load post 😱`, content: '' };
        }

        return { title: post.title, content: loremIpsum };
      }
    });
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

  for (let i = 1; i < posts.length + 1; i++) {
    it('should render selected post id', async () => {
      TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock(`${i}-post`) });
      fixture = TestBed.createComponent(PostComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const heading: DebugElement = fixture.debugElement.query(By.css('h1'));
      const content: DebugElement = fixture.debugElement.query(By.css('p'));

      expect(heading.nativeElement.textContent).toBe(`${i}. Post Title`);
      expect(content.nativeElement.textContent).toBe(loremIpsum);
    });
  }

  it('should contain post$ stream', () => {
    expect(component.post$).toBeTruthy();
  });

  it('post$ stream should return data from activated route', done => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock() });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    component.post$.subscribe(({title, content}) => {
      expect(title).toBe(`Can't load post 😱`);
      expect(content).toBe('');
      done();
    });
  });
});
