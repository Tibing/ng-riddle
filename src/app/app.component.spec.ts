import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatButtonHarness } from '@angular/material/button/testing';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let loader: HarnessLoader;
  let location: Location;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatToolbarModule, MatButtonModule, AppRoutingModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    location = TestBed.inject(Location);
  });

  it('should create the app', () => {
    fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it('should has two children', async () => {
    const children: DebugElement[] = fixture.debugElement.children;

    expect(children.length).toBe(2);
  });

  it('should contain one toolbar', async () => {
    const toolbars: MatToolbarHarness[] = await loader.getAllHarnesses(MatToolbarHarness);

    expect(toolbars.length).toBe(1);
  });

  it('should contain toolbar as first direct child', async () => {
    const children: DebugElement[] = fixture.debugElement.children;

    expect(children[0].name).toBe('mat-toolbar');
  });

  it('should contain main as second direct child', async () => {
    const children: DebugElement[] = fixture.debugElement.children;

    expect(children[1].name).toBe('main');
  });

  it('should contain router-outlet inside main', async () => {
    const children: DebugElement[] = fixture.debugElement.children;
    const routerOutlet: DebugElement = children[1].children[0];

    expect(routerOutlet.name).toBe('router-outlet');
  });

  it('should contain toolbar with one row', async () => {
    const toolbar: MatToolbarHarness = await loader.getHarness(MatToolbarHarness);

    expect(await toolbar.hasMultipleRows()).toBeFalse();
  });

  it('should contain toolbar with color primary', async () => {
    const toolbar: MatToolbarHarness = await loader.getHarness(MatToolbarHarness);

    expect(await (await toolbar.host()).getAttribute('color')).toBe('primary');
  });

  it('should contain five menu buttons', async () => {
    const buttons: MatButtonHarness[] = await loader.getAllHarnesses(MatButtonHarness);

    expect(await buttons.length).toBe(5);
  });

  it('should contain Ng Riddle menu button', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Ng Riddle'}));

    expect(button).toBeTruthy();
    expect(await button.getText()).toBe('Ng Riddle');
  });

  it('Ng Riddle menu button should trigger "/ng-riddle" navigation', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Ng Riddle'}));

    await button.click();

    expect(location.path()).toBe('/ng-riddle');
  });

  it('Ng Riddle menu button should should contain proper routerLink', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Ng Riddle'}));

    expect(await (await button.host()).getAttribute('routerLink')).toBe('ng-riddle');
  });

  it('should contain Posts menu button', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Posts'}));

    expect(button).toBeTruthy();
    expect(await button.getText()).toBe('Posts');
  });

  it('Posts menu button should trigger "/posts" navigation', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Posts'}));

    await button.click();

    expect(location.path()).toBe('/posts');
  });

  it('Posts menu button should should contain proper routerLink', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Posts'}));

    expect(await (await button.host()).getAttribute('routerLink')).toBe('posts');
  });

  it('should contain Contact Us menu button', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Contact Us'}));

    expect(button).toBeTruthy();
    expect(await button.getText()).toBe('Contact Us');
  });

  it('Contact Us menu button should trigger "/contact-us" navigation', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Contact Us'}));

    await button.click();

    expect(location.path()).toBe('/contact-us');
  });

  it('Contact Us menu button should should contain proper routerLink', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Contact Us'}));

    expect(await (await button.host()).getAttribute('routerLink')).toBe('contact-us');
  });

  it('should contain About menu button', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'About'}));

    expect(button).toBeTruthy();
    expect(await button.getText()).toBe('About');
  });

  it('About menu button should trigger "/about" navigation', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'About'}));

    await button.click();

    expect(location.path()).toBe('/about');
  });

  it('About menu button should should contain proper routerLink', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'About'}));

    expect(await (await button.host()).getAttribute('routerLink')).toBe('about');
  });

  it('should contain Dashboard menu button', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Dashboard'}));

    expect(button).toBeTruthy();
    expect(await button.getText()).toBe('Dashboard');
  });

  it('Dashboard menu button should trigger "/dashboard" navigation', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Dashboard'}));

    await button.click();

    expect(location.path()).toBe('/dashboard');
  });

  it('Dashboard menu button should should contain proper routerLink', async () => {
    const button: MatButtonHarness = await loader.getHarness(MatButtonHarness.with({ text: 'Dashboard'}));

    expect(await (await button.host()).getAttribute('routerLink')).toBe('dashboard');
  });

  it('should contain menu buttons in proper order', async () => {
    const buttons: MatButtonHarness[] = await loader.getAllHarnesses(MatButtonHarness);
    const actualTitles: string[] = await Promise.all(buttons.map((button: MatButtonHarness) => button.getText()));
    const expectedTitles: string[] = [
      'Ng Riddle',
      'Posts',
      'Contact Us',
      'About',
      'Dashboard',
    ];

    expect(actualTitles).toEqual(expectedTitles);
  });

  it('should contain all five menu buttons directly in mat-toolbar', async () => {
    const buttons: MatButtonHarness[] = await loader.getAllHarnesses(MatButtonHarness.with({ ancestor: 'mat-toolbar' }));

    expect(buttons.length).toBe(5);
  });
});
