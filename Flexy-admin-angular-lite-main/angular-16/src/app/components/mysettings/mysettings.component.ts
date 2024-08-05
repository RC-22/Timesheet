// settings.component.ts

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mysettings',
  standalone:true,
  templateUrl: './mysettings.component.html',
  styleUrls: ['./mysettings.component.scss'],
  imports:[FormsModule,CommonModule],
})
export class mysettingsComponent {

  formData: any = {
    username: 'johndoe',
    email: 'johndoe@example.com',
    password: '',
    confirmPassword: ''
  };

  onSubmit() {
    // Handle form submission logic here, e.g., sending data to server
    console.log('Form submitted:', this.formData);
    // You can add your HTTP service call here to send formData to backend
  }

}
