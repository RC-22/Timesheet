import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
// import { AppComponent } from './app.component';
// import { Component, OnInit } from '@angular/core';
// import { Router, NavigationEnd } from '@angular/router';
// import { filter } from 'rxjs/operators';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//   isLoginPage: boolean = false;

//   constructor(private router: Router) {}

//   ngOnInit() {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => {
//       this.isLoginPage = this.router.url === '/login';
//     });
//   }
// }

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  //it('')

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Flexy-admin-angular-lite'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Flexy-admin-angular-lite');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Flexy-admin-angular-lite app is running!');
  });
});
