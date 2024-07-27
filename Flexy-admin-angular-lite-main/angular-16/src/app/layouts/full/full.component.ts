import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, filter } from 'rxjs/operators';
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
onLogout() {
throw new Error('Method not implemented.');
}
  search: boolean = false;
  showSidebarHeader: boolean = true;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver, private router: Router) { }
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
    // {
    //   link: "/login",
    //   icon: "layout",
    //   menu: "login",
    // },
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
}