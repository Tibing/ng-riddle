import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { loremIpsum, posts } from './posts.mock';

export interface Post {
  id: string;
  title: string;
}

export interface PostContent {
  title: string;
  content: string;
}

@Injectable({ providedIn: 'root' })
export class PostService {

  getPosts(): Observable<Post[]> {
    return of(posts);
  }

  getPostContent(postId: string): Observable<PostContent> {
    const post: Post | undefined = posts.find((p: Post) => p.id === postId);

    if (!post) {
      return of({ title: `Can't load post 😱`, content: '' });
    }

    return of({ title: post.title, content: loremIpsum });
  }
}
