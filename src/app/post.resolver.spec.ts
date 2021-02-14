import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

import { PostResolver } from './post.resolver';
import { PostService } from './post.service';
import { routes } from './app-routing.module';

describe('PostResolver', () => {
  let resolver: PostResolver;
  let service: PostService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [PostService],
    });
    resolver = TestBed.inject(PostResolver);
    service = TestBed.inject(PostService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });

  it('should query for post service', async () => {
    spyOn(service, 'getPostContent').and.returnValue(of({ title: `Can't load post 😱`, content: '' }));
    await router.navigateByUrl('post/my-favorite-post');
    expect(service.getPostContent).toHaveBeenCalled();
  });
});
