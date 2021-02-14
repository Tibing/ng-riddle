import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { CommonModule, Location } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { posts, PostsComponent } from './posts.component';
import { routes } from '../app-routing.module';

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, MatListModule, RouterTestingModule.withRoutes(routes)],
      declarations: [PostsComponent]
    })
      .compileComponents();

    location = TestBed.inject(Location);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain posts list', () => {
    expect(component.posts).toEqual(posts);
  });

  it('should has Posts title', () => {
    const title: DebugElement = fixture.debugElement.query(By.css('h1'));

    expect(title).toBeTruthy();
    expect(title.nativeElement.textContent).toBe('Posts');
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
      expect(link.attributes.href).toBe(`/post/${posts[i].id}`);
      expect(link.nativeElement.textContent).toBe(posts[i].title);
    }
  });
});
