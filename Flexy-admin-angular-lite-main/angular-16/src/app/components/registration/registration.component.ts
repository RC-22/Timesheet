import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule,MatDatepickerModule,
    MatNativeDateModule,],
  templateUrl:'./registration.component.html',
  styleUrls:['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  checked: BooleanInput;
  forms!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.forms = this.formBuilder.group({
      employeeName: ['', Validators.required],
      employeeId: ['',Validators.required],
      birthdate: ['', Validators.required],
      mobileNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      gender: ['male', Validators.required]
    });
  }
  onSubmit() {
    if (this.forms.valid) {
      console.log(this.forms.value); // Replace with your form submission logic
    } else {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.forms);
    }
  }
  // Helper method to mark all fields as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}