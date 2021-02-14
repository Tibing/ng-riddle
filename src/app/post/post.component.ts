import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit {

  selectedPostID = this.activatedRoute.snapshot.paramMap.get('postId');

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}
