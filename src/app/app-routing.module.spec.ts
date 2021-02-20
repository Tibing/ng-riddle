import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { Route, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { routes } from './app-routing.module';
import { NgRiddleComponent } from './ng-riddle/ng-riddle.component';
import { PostsComponent } from './posts/posts.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostComponent } from './post/post.component';

describe('AppComponent', () => {
  let router: Router;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatButtonModule,
        RouterTestingModule.withRoutes(routes),
      ],
      declarations: [
        NgRiddleComponent,
        PostsComponent,
        ContactUsComponent,
        AboutComponent,
      ],
    }).compileComponents();

    location = TestBed.inject(Location);
    router = TestBed.inject(Router);

    router.initialNavigation();
  });

  it('navigate to "/ng-riddle" should take you to /ng-riddle', async () => {
    await router.navigateByUrl('/ng-riddle');

    expect(location.path()).toBe('/ng-riddle');
  });

  it('navigate to "/posts" should take you to /posts', async () => {
    await router.navigateByUrl('posts');

    expect(location.path()).toBe('/posts');
  });

  it('navigate to "/posts/any-id" should take you to /posts/any-id', async () => {
    await router.navigateByUrl('posts/any-id');

    expect(location.path()).toBe('/posts/any-id');
  });

  it('navigate to "/posts/some-another-id" should take you to /posts/some-another-id', async () => {
    await router.navigateByUrl('posts/some-another-id');

    expect(location.path()).toBe('/posts/some-another-id');
  });

  it('navigate to "/contact-us" should take you to /contact-us', async () => {
    await router.navigateByUrl('contact-us');

    expect(location.path()).toBe('/contact-us');
  });

  it('navigate to "/about" should take you to /about', async () => {
    await router.navigateByUrl('about');

    expect(location.path()).toBe('/about');
  });

  it('navigate to "/dashboard" should take you to /dashboard', async () => {
    await router.navigateByUrl('dashboard');

    expect(location.path()).toBe('/dashboard');
  });

  it('navigate to dashboard route ought to be the only lazy', async () => {
    const route: Route | undefined = routes.find((r: Route) => !!r.loadChildren);

    expect(route).toBeTruthy();
    expect(route?.path).toBe('dashboard');
  });

  it('navigate to "/" should take you to /ng-riddle', async () => {
    await router.navigateByUrl('/');

    expect(location.path()).toBe('/ng-riddle');
  });

  it('navigate to "" should take you to /ng-riddle', async () => {
    await router.navigateByUrl('');

    expect(location.path()).toBe('/ng-riddle');
  });

  it('/ng-riddle redirect ought to have proper pathMatch', async () => {
    const route: Route | undefined = routes.find((r: Route) => !!r.redirectTo);

    expect(route).toBeTruthy();
    expect(route?.pathMatch).toBe('full');
  });

  it('/any-random-path ought to take you to 404 page', async () => {
    await router.navigateByUrl('/any-random-path');

    expect(location.path()).toBe('/any-random-path');
  });

  it('/oasegoj ought to take you to 404 page', async () => {
    await router.navigateByUrl('/oasegoj');

    expect(location.path()).toBe('/oasegoj');
  });

  it('ought to have wild card route', () => {
    const route: Route | undefined = routes.find((r: Route) => r.path === '**');

    expect(route).toBeTruthy();
    expect(route?.component).toBe(NotFoundComponent);
  });

  it('posts route ought to have two children', async () => {
    const route: Route | undefined = routes.find((r: Route) => r.path === 'posts');

    expect(route).toBeTruthy();
    expect(route?.children).toBeTruthy();
    expect(route?.children?.length).toBe(2);
  });

  it('posts child has to render routes list', async () => {
    const route: Route | undefined = routes.find((r: Route) => r.path === 'posts');
    const postsList: Route | undefined = route?.children?.find((r: Route) => !r.path);

    expect(postsList).toBeTruthy();
    expect(postsList?.component).toBe(PostsListComponent);
  });

  it('posts child has to render post', async () => {
    const route: Route | undefined = routes.find((r: Route) => r.path === 'posts');
    const post: Route | undefined = route?.children?.find((r: Route) => r.path === ':postId');

    expect(post).toBeTruthy();
    expect(post?.component).toBe(PostComponent);
  });
});
