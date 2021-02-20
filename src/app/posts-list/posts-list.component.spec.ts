import { CommonModule } from '@angular/common';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

import { routes } from '../app-routing.module';
import { Post } from '../post.service';
import { posts } from '../posts.mock';
import { PostsListComponent } from './posts-list.component';

describe('PostsListComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatListModule, RouterTestingModule.withRoutes(routes)],
      declarations: [PostsListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain posts list', done => {
    component.posts.subscribe((loadedPosts: Post[]) => {
      expect(loadedPosts).toEqual(posts);
      done();
    });
  });

  it('should contain mat-nav-list', () => {
    const navList: DebugElement = fixture.debugElement.query(By.directive(MatNavList));

    expect(navList).toBeTruthy();
  });

  it('should contain mat-list-items', () => {
    const listItems: DebugElement[] = fixture.debugElement.queryAll(By.directive(MatListItem));

    expect(listItems.length).toBe(posts.length);
  });

  it('each mat-list-item ought to contain a link to post', async () => {
    const links: DebugElement[] = fixture.debugElement.queryAll(By.css('a'));

    expect(links.length).toBe(posts.length);

    for (let i = 0; i < posts.length; i++) {
      const link: DebugElement = links[i];
      expect(link.name).toBe('a');
      expect(link.attributes.href).toBe(`/posts/${posts[i].id}`);
      expect(link.nativeElement.textContent).toBe(posts[i].title);
    }
  });
});
