import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable, of } from 'rxjs';

import { PostComponent } from './post.component';
import { loremIpsum, posts } from '../posts.mock';
import { Post, PostContent } from '../post.service';
import { routes } from '../app-routing.module';

const getMockPost = (id: string = '') => ({ id, title: `Can't load post 😱`, content: '' });
class ActivatedRouteMock {

  constructor(private config?: { postId?: string, prev?: PostContent, next?: PostContent }) {
  }

  snapshot = {};

  // @ts-ignore
  get data(): Observable<any> {
    // tslint:disable-next-line:no-non-null-assertion
    const postId: string = this.config?.postId!;
    // tslint:disable-next-line:no-non-null-assertion
    const prev: PostContent = this.config?.prev!;
    // tslint:disable-next-line:no-non-null-assertion
    const next: PostContent = this.config?.next!;

    return of({
      get postContent(): PostContent {
        const post: Post | undefined = posts.find((p: Post) => p.id === postId);

        if (!post) {
          return getMockPost();
        }

        return { id: '', title: post.title, content: loremIpsum, next, prev };
      }
    });
  }
  set data(data) {}
}

describe('PostComponent', () => {
  let component: PostComponent;
  let fixture: ComponentFixture<PostComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
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
      TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock({ postId: `${i}-post` }) });
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

  it('should not render prev and next buttons when no prev/next posts', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock({ postId: `8-post` }) });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a[mat-flat-button]'));
    expect(links.length).toBe(0);
  });

  it('should render only prev button when only prev post exists', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock({ postId: `8-post`, prev: getMockPost() }) });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a[mat-flat-button]'));
    const prev: DebugElement = links[0];

    expect(links.length).toBe(1);
    expect(prev).toBeTruthy();
    expect(prev.nativeElement.textContent).toBe('Prev');
  });

  it('should render only next button when only next post exists', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock({ postId: `8-post`, next: getMockPost() }) });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a[mat-flat-button]'));
    const next: DebugElement = links[0];

    expect(links.length).toBe(1);
    expect(next).toBeTruthy();
    expect(next.nativeElement.textContent).toBe('Next');
  });

  it('should render next/prev button when next/prev post exists', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock({ postId: `8-post`, next: getMockPost(), prev: getMockPost() }) });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a[mat-flat-button]'));
    const prev: DebugElement = links[0];
    const next: DebugElement = links[1];

    expect(links.length).toBe(2);
    expect(next).toBeTruthy();
    expect(next.nativeElement.textContent).toBe('Next');
    expect(prev).toBeTruthy();
    expect(prev.nativeElement.textContent).toBe('Prev');
  });

  it('should render links to next/prev posts', () => {
    TestBed.overrideProvider(ActivatedRoute, { useValue: new ActivatedRouteMock({ postId: `8-post`, next: getMockPost('9-post'), prev: getMockPost('7-post') }) });
    fixture = TestBed.createComponent(PostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a[mat-flat-button]'));
    const prev: DebugElement = links[0];
    const next: DebugElement = links[1];

    expect(links.length).toBe(2);
    expect(next).toBeTruthy();
    expect(next.attributes['ng-reflect-router-link']).toBe('../9-post');
    expect(prev).toBeTruthy();
    expect(prev.attributes['ng-reflect-router-link']).toBe('../7-post');
  });
});
