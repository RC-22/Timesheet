import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { projectComponent } from './components/project/project.component';
import { moduleComponent } from './components/module/module.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { timesheetComponent } from './components/timesheet/timesheet.component';
import { ProductComponent } from './dashboard/dashboard-components/product/product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './guards/authguard.services';
 
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' }, // Default to login
      { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
      { path: 'table', component: ProductComponent, canActivate: [AuthGuard] },
      { path: 'timesheet', component: timesheetComponent, canActivate: [AuthGuard] },
      { path: 'module', component: moduleComponent, canActivate: [AuthGuard] },
      { path: 'project', component: projectComponent, canActivate: [AuthGuard] },
    ],
  },
  { path: '**', redirectTo: '/login' }, // Wildcard route for a 404 page
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }