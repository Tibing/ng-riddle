import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { PostContent, PostService } from './post.service';

@Injectable({ providedIn: 'root' })
export class PostResolver implements Resolve<PostContent> {

  constructor(private postService: PostService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PostContent> {
    // tslint:disable-next-line:no-non-null-assertion
    const postId: string | null = route.paramMap.get('postId')!;
    return this.postService.getPostContent(postId);
  }
}
