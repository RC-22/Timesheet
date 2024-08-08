import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ],
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  forms!: FormGroup;
  submissionMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.forms = this.formBuilder.group({
      employeeName: ['', Validators.required],
      employeeId: ['', Validators.required],
      birthdate: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      gender: ['male', Validators.required]
    });
  }

  onSubmit() {
    if (this.forms.valid) {
      console.log('Form Submitted', this.forms.value);
      this.submissionMessage = 'Form submitted successfully!';
      this.forms.reset();
      setTimeout(() => this.submissionMessage = null, 5000);
    } else {
      this.markFormGroupTouched(this.forms);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}
