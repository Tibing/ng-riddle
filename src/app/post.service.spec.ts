import { TestBed } from '@angular/core/testing';

import { Post, PostContent, PostService } from './post.service';
import { loremIpsum } from './posts.mock';

describe('PostService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all posts', async () => {
    const posts: Post[] = await service.getPosts().toPromise();

    expect(posts.length).toBe(12);
  });

  it('should get post content if post exists', async () => {
    const post: PostContent = await service.getPostContent('7-post').toPromise();

    expect(post.title).toBe('7. Post Title');
    expect(post.content).toBe(loremIpsum);
  });
});
