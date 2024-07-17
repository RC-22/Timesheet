import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

interface sidebarMenu {
  link: string;
  icon: string;
  menu: string;
}

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent {

  search: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  routerActive: string = "activelink";

  sidebarMenu: sidebarMenu[] = [
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
      link: "/login",
      icon: "layout",
      menu: "login",
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
    
    // {
    //   link: "/alerts",
    //   icon: "info",
    //   menu: "Alerts",
    // },
   
    {
      link: "/timesheet",
      icon: "menu",
      menu: "Timesheet Fill Up",
    },
    // {
    //   link: "/table",
    //   icon: "grid",
    //   menu: "Tables",
    // },
  //   {
  //     link: "/expansion",
  //     icon: "divide-circle",
  //     menu: "Expansion Panel",
  //   },
    
  //   {
  //     link: "/tabs",
  //     icon: "list",
  //     menu: "Tabs",
  //   },
  //   {
  //     link: "/progress",
  //     icon: "bar-chart-2",
  //     menu: "Progress Bar",
  //   },
  //   {
  //     link: "/toolbar",
  //     icon: "voicemail",
  //     menu: "Toolbar",
  //   },
  //   {
  //     link: "/progress-snipper",
  //     icon: "loader",
  //     menu: "Progress Snipper",
  //   },
  //   {
  //     link: "/tooltip",
  //     icon: "bell",
  //     menu: "Tooltip",
  //   },
  //   {
  //     link: "/snackbar",
  //     icon: "slack",
  //     menu: "Snackbar",
  //   },
  //   {
  //     link: "/slider",
  //     icon: "sliders",
  //     menu: "Slider",
  //   },
  //   {
  //     link: "/slide-toggle",
  //     icon: "layers",
  //     menu: "Slide Toggle",
  //   },
  ]

}
