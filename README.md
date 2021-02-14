# Ng Riddle

This repository contains *Angular Routing Riddle*.
It consists of 6 tasks for now.
At this riddle you'll have to configure routing for a simple website.

> All the tasks has to be implemented with features from the **@angular/router** module.
> Please, don't try to do features via plain JavaScript hacks.

## How to start

Copy the following script to get started:

```shell
# Clone the repository
git clone git@github.com:Tibing/ng-riddle.git

# Go to the repository
cd ./ng-riddle

# Install node_modules
npm install

# Start an app
npm start
```

## How to solve the riddle

### Workflow

1. Checkout to the task's branch.
2. Do what it asks you to do.
3. Run tests with `npm test`.
4. If tests fail, go to point 2.
5. If all tests pass you can go to my solution, as **{task branch name}_done**.
6. Go to the next task.

### 1. Setup routing

#### What you have to do

Go to the task branch

```shell
git checkout 1-setup-router-module
```

You have to add a routing module that will define which components to render for which page.

Here're pages:
- *ng-riddle* -> **NgRiddleComponent**
  ![](readme-assets/task-1/ng-riddle.png)
- *posts* -> **PostsComponent**
  ![](readme-assets/task-1/posts.png)
- *contact-us* -> **ContactUsComponent**
  ![](readme-assets/task-1/contact-us.png)
- *about* -> **AboutComponent**
  ![](readme-assets/task-1/about.png)
- *dashboard* -> **DashboardComponent**
  ![](readme-assets/task-1/dashboard.png)
  
At this stage menu links shouldn't work.
We'll configure that at the next stage.
At this stage we're just configuring rendering of specific components for specific urls.

#### Useful links

- https://angular.io/guide/router#defining-a-basic-route

### 2. Configure menu links

#### What you have to do

Go to the task branch

```shell
git checkout 2-setup-navigation
```

At this stage you have to configure the menu and make sure that
appropriate links redirects the user to the appropriate component.

![](readme-assets/task-2/ng-riddle.png)

#### Useful links

- https://angular.io/guide/router#defining-a-basic-route

### 3. Highlight active menu item

#### What you have to do

Go to the task branch

```shell
git checkout 3-setup-active-route-styles
```

Make menu item highlighted when the URL corresponds for the specific menu item.
Notice on the screenshot below that *About* link is highlighted with white line.

![](readme-assets/task-3/about.png)

#### Useful links

- https://angular.io/guide/router#active-router-links

### 4. Create posts list

#### What you have to do

Go to the task branch

```shell
git checkout 4-params-and-activated-route
```

Previously, at the *posts* page you had nothing.
Only the **posts works!** text.
Now we have to create a list of posts there.
It ought to be a list of links.
Each link has to redirect the user to the specific post.

Here's how this list ought to look like finally (I've already done a small setup for you):

![](readme-assets/task-4/posts.png)

Here's how specific post page ought to look like finally (I've already done a small setup for you):

![](readme-assets/task-4/post.png)

Post page has to render the following text - *Selected Post ID: {post id from url}*

#### Useful links

- https://angular.io/start/start-routing
- https://angular.io/guide/router#accessing-query-parameters-and-fragments

### 5. Fetch post's content

#### What you have to do

Go to the task branch

```shell
git checkout 5-post-content-resolver
```

At this stage you have to know how to create a basic routing and how to retrieve parameters from the url.
Now, you have to fetch content based on the url parameter.

Here's how post ought to look like finally:

![](readme-assets/task-5/post.png)

Fetch content before rendering the `PostComponent`.
The simplest way to do so is to use route resolver.
Use `PostService` as a server.

#### Useful links

- https://angular.io/api/router/Resolve

### 6. Lazy-load dashboard

#### What you have to do

Go to the task branch

```shell
git checkout 6-lazy-load-dashboard
```

Assume that the dashboard page is huge, not required for the initial loading and bloats the bundle.
To solve the problem you have to make it load lazily.

#### Useful links

- https://angular.io/guide/lazy-loading-ngmodules
