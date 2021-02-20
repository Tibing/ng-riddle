import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { PostContent } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  post$: Observable<PostContent> = this.activatedRoute.data
    .pipe(
      map(data => data.postContent),
    );

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
