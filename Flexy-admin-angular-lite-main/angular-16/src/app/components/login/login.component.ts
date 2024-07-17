import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DemoFlexyModule, MatGridListModule, NgFor],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent  {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
//   showPassword = false; // Initially hide password
// loginForm: any;

//   constructor() {}

//   togglePasswordVisibility(): void {
//     this.showPassword = !this.showPassword;
//   }
showPassword = false;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Implement your login logic here
      console.log('Form submitted:', this.loginForm.value);
    } else {
      // Mark all fields as touched to display validation errors
      this.loginForm.markAllAsTouched();
    }
  }
  
}
