import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authservices';

// Define the SidebarMenu interface
interface SidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  @ViewChild('drawer') drawer: any; // Reference to the mat-sidenav

  search: boolean = false;
  showSidebarHeader: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private authService: AuthService // Inject AuthService
  ) {}

  routerActive: string = "activelink";

  // Define sidebarMenu with SidebarMenu type
  sidebarMenu: SidebarMenu[] = [
    {
      link: "/home",
      icon: "calendar",
      menu: "Monthly report",
    },
    {
      link: "/registration",
      icon: "file-text",
      menu: "User Registration",
    },
    {
      link: "/project",
      icon: "layout",
      menu: "Project Creation",
    },
    {
      link: "/module",
      icon: "settings",
      menu: "Project Module Creation",
    },
    {
      link: "/timesheet",
      icon: "menu",
      menu: "Timesheet Fill Up",
    },
  ];

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.showSidebarHeader = !this.router.url.includes('login');
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  onChangePasswordClick(): void {
    this.router.navigate(['/change-password']);
  }

  closeSidebar() {
    if (this.drawer) {
      this.drawer.close();
    }
}

}




// /////////////////////
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { Router, NavigationEnd } from '@angular/router';
// import { Observable } from 'rxjs';
// import { map, shareReplay, filter } from 'rxjs/operators';
// import { AuthService } from 'src/app/services/authservices';

// @Component({
//   selector: 'app-full',
//   templateUrl: './full.component.html',
//   styleUrls: ['./full.component.scss']
// })
// export class FullComponent implements OnInit {
//   @ViewChild('drawer') drawer: any; // Reference to the mat-sidenav

//   search: boolean = false;
//   showSidebarHeader: boolean = true;
//   isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
//     .pipe(
//       map(result => result.matches),
//       shareReplay()
//     );

//   constructor(
//     private breakpointObserver: BreakpointObserver,
//     private router: Router,
//     private authService: AuthService // Inject AuthService
//   ) {}

//   routerActive: string = "activelink";

//   sidebarMenu: SidebarMenu[] = [
//     {
//       link: "/home",
//       icon: "calendar",
//       menu: "Monthly report",
//     },
//     {
//       link: "/registration",
//       icon: "file-text",
//       menu: "User Registration",
//     },
//     {
//       link: "/project",
//       icon: "layout",
//       menu: "Project Creation",
//     },
//     {
//       link: "/module",
//       icon: "settings",
//       menu: "Project Module Creation",
//     },
//     {
//       link: "/timesheet",
//       icon: "menu",
//       menu: "Timesheet Fill Up",
//     },
//   ];

//   ngOnInit() {
//     this.router.events.pipe(
//       filter(event => event instanceof NavigationEnd)
//     ).subscribe(() => {
//       this.showSidebarHeader = !this.router.url.includes('login');
//     });
//   }

//   logout(): void {
//     this.authService.logout();
//     this.router.navigate(['/login']);
//   }

//   onChangePasswordClick(): void {
//     this.router.navigate(['/change-password']);
//   }
// }
