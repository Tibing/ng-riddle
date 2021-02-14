import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PostContent } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  post: PostContent = this.activatedRoute.snapshot.data.postContent;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
