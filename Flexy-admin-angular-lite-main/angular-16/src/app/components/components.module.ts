import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertsComponent } from './alerts/alerts.component';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { RegistrationComponent } from './registration/registration.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { loginComponent } from './login/login.component';
import { timesheetComponent } from './timesheet/timesheet.component';
import { TabsComponent } from './tabs/tabs.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { moduleComponent } from './module/module.component';
import { ProgressComponent } from './progress/progress.component';
import { FormsModule } from '@angular/forms';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ProgressSnipperComponent } from './progress-snipper/progress-snipper.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { projectComponent } from './project/project.component';
import { TooltipsComponent } from './tooltips/tooltips.component'


@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    projectComponent,
    SlideToggleComponent,
    SliderComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    timesheetComponent,
    TabsComponent,
    ExpansionComponent,
    moduleComponent,
    ProgressComponent,
    RegistrationComponent,
    AlertsComponent,
    loginComponent,
    TooltipsComponent,
    FormsModule
  ],
  exports: [
    AlertsComponent,
    RegistrationComponent,
    loginComponent,
    timesheetComponent,
    TabsComponent,
    ExpansionComponent,
    moduleComponent,
    ProgressComponent,
    ToolbarComponent,
    ProgressSnipperComponent,
    SnackbarComponent,
    SliderComponent,
    SlideToggleComponent,
    projectComponent,
  ]
})
export class ComponentsModule { }
