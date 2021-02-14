import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface Post {
  title: string;
  id: string;
}

export const posts: Post[] = [
  { title: '1. Post Title', id: '1-post' },
  { title: '2. Post Title', id: '2-post' },
  { title: '3. Post Title', id: '3-post' },
  { title: '4. Post Title', id: '4-post' },
  { title: '5. Post Title', id: '5-post' },
  { title: '6. Post Title', id: '6-post' },
  { title: '7. Post Title', id: '7-post' },
  { title: '8. Post Title', id: '8-post' },
  { title: '9. Post Title', id: '9-post' },
  { title: '10. Post Title', id: '10-post' },
  { title: '11. Post Title', id: '11-post' },
  { title: '12. Post Title', id: '12-post' },
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostsComponent implements OnInit {

  posts: Post[] = posts;

  constructor() { }

  ngOnInit(): void {
  }

}
