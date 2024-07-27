// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { AuthService } from 'src/app/services/authservices';

// @Component({
//   selector: 'app-login',
//   standalone:true,
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss']
// })
// export class LoginComponent {
// loginForm: any;
// onSubmit() {
// throw new Error('Method not implemented.');
// }
//   username: string = '';
//   password: string = '';
//   constructor(private authService: AuthService, private router: Router) {}
//   onLogin() {
//     if (this.username && this.password) {
//       this.authService.login(this.username, this.password);
//       this.router.navigate(['/dashboard']); // Redirect to the dashboard or any other protected route
//     } else {
//       alert('Please enter username and password');
//     }
//   }
// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authservices';


@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[FormsModule,CommonModule]
})
export class LoginComponent {
  email: string = '';
  password: string = '';
loginForm: any;
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  onSubmit(form: any) {
    if (form.valid) {
      this.authService.login(this.email, this.password);
      if (this.authService.isLoggedIn()) {
        this.router.navigate(['/home']);
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
