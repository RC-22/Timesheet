import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatherModule } from 'angular-feather';
import { allIcons } from 'angular-feather/icons';
import { RegistrationComponent } from './registration/registration.component';
import { DemoFlexyModule } from '../demo-flexy-module';
import { LoginComponent } from './login/login.component';
import { timesheetComponent } from './timesheet/timesheet.component';
import { moduleComponent } from './module/module.component';
import { FormsModule } from '@angular/forms';
import { projectComponent } from './project/project.component';
//import  { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  imports: [
    CommonModule,
    FeatherModule.pick(allIcons),
    DemoFlexyModule,
    projectComponent,
    timesheetComponent,
    moduleComponent,
    RegistrationComponent,
    LoginComponent,
    FormsModule,
   //ChangePasswordComponent,

  ],
  exports: [
    RegistrationComponent,
    LoginComponent,
    timesheetComponent,
    moduleComponent,
    projectComponent,
   // ChangePasswordComponent,
  ]
})
export class ComponentsModule { }