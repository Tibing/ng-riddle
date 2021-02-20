import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { loremIpsum, posts } from './posts.mock';

export interface Post {
  id: string;
  title: string;
}

export interface PostContent {
  id: string;
  title: string;
  content: string;
  prev?: PostContent;
  next?: PostContent;
}

@Injectable({ providedIn: 'root' })
export class PostService {

  getPosts(): Observable<Post[]> {
    return of(posts);
  }

  getPostContent(postId: string): Observable<PostContent> {
    const postIndex: number = posts.findIndex((p: Post) => p.id === postId);

    if (postIndex < 0) {
      return of({ id: '', title: `Can't load post 😱`, content: '' });
    }

    const post: Post = posts[postIndex];
    const prev: Post | undefined = posts[postIndex - 1];
    const next: Post | undefined = posts[postIndex + 1];

    return of({
       id: post.id,
       title: post.title,
       content: loremIpsum,
       prev: prev && { id: prev.id, title: prev.title, content: loremIpsum },
       next: next && { id: next.id, title: next.title, content: loremIpsum },
    });
  }
}