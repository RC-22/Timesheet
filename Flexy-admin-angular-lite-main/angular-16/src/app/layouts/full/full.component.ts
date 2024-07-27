import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';
import { AuthService } from 'src/app/services/authservices';


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
      // Hide sidebar header on login page
      this.showSidebarHeader = !this.router.url.includes('login');
    });
  }

  // Logout function
  logout(): void {
    this.authService.logout(); // Call logout method from AuthService
    this.router.navigate(['/login']); // Redirect to login page after logout
  }
}
