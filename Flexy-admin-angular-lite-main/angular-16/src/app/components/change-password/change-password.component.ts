// // change-password.component.ts

// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-change-password',
//   standalone:true,
//   templateUrl: './change-password.component.html',
//   styleUrls: ['./change-password.component.scss'],
//   imports:[FormsModule,CommonModule],
// })
// export class ChangePasswordComponent {
// onChangePassword() {
// throw new Error('Method not implemented.');
// }
// currentPassword: any;
// confirmPassword: any;
// newPassword: any;

//   constructor(private router: Router) {}

//   navigateToChangePassword(): void {
//     this.router.navigate(['/change-password']); // Navigate to change password route
//   }

// }
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: true,
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  imports: [FormsModule, CommonModule],
})
export class ChangePasswordComponent {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  isCurrentPasswordVisible: boolean = false;
  isNewPasswordVisible: boolean = false;
  isConfirmPasswordVisible: boolean = false;

  constructor(private router: Router) {}

  togglePasswordVisibility(field: string): void {
    switch (field) {
      case 'current':
        this.isCurrentPasswordVisible = !this.isCurrentPasswordVisible;
        break;
      case 'new':
        this.isNewPasswordVisible = !this.isNewPasswordVisible;
        break;
      case 'confirm':
        this.isConfirmPasswordVisible = !this.isConfirmPasswordVisible;
        break;
    }
  }

  onChangePassword(): void {
    if (this.newPassword !== this.confirmPassword) {
      alert('New passwords do not match.');
      return;
    }

    // Simulate form submission
    console.log('Password changed successfully.');
    // Implement your password change logic here

    // Navigate to a success or home route
    this.router.navigate(['/home']);
  }

  navigateToChangePassword(): void {
    this.router.navigate(['/change-password']); 
  }
}
