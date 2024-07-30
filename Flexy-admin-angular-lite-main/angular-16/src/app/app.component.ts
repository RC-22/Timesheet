import { Component } from '@angular/core';
import { AuthService } from './services/authservices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'flexy-angular';
  isLoginPage: boolean=true;
  router: any;
  constructor(private authService: AuthService) {}

  onLogout(): void {
    this.authService.logout();
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/change-password']);
  }
}