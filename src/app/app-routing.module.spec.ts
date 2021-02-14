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

  it('navigate to "" should take you to /ng-riddle', async () => {
    await router.navigateByUrl('');

    expect(location.path()).toBe('/ng-riddle');
  });

  it('navigate to "/ng-riddle" should take you to /ng-riddle', async () => {
    await router.navigateByUrl('/ng-riddle');

    expect(location.path()).toBe('/ng-riddle');
  });

  it('navigate to "/posts" should take you to /posts', async () => {
    await router.navigateByUrl('posts');

    expect(location.path()).toBe('/posts');
  });

  it('navigate to "/post/any-id" should take you to /post/any-id', async () => {
    await router.navigateByUrl('post/any-id');

    expect(location.path()).toBe('/post/any-id');
  });

  it('navigate to "/post/some-another-id" should take you to /post/some-another-id', async () => {
    await router.navigateByUrl('post/some-another-id');

    expect(location.path()).toBe('/post/some-another-id');
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

  it('navigate to "/any-random-url" should take you to /ng-riddle', async () => {
    await router.navigateByUrl('/any-random-url');

    expect(location.path()).toBe('/ng-riddle');
  });
});
