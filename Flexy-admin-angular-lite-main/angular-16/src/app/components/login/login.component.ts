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
  loginForm: FormGroup;

isLoggedIn: boolean = true; 

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Form is valid, perform login or further processing here
      console.log('Form submitted:', this.loginForm.value);
    } else {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.loginForm);
    }
  }

  // Utility method to mark all fields as touched
  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}