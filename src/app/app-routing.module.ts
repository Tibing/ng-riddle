import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgRiddleComponent } from './ng-riddle/ng-riddle.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { PostResolver } from './post.resolver';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsListComponent } from './posts-list/posts-list.component';


export const routes: Routes = [
  { path: 'ng-riddle', component: NgRiddleComponent },
  {
    path: 'posts',
    component: PostsComponent,
    children: [
      { path: '', component: PostsListComponent },
      {
        path: ':postId',
        component: PostComponent,
        resolve: {
          postContent: PostResolver
        }
      },
    ],
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module')
      .then(({ DashboardModule }) => DashboardModule),
  },
  { path: '', redirectTo: 'ng-riddle', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
