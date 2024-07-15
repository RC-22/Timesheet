import { BooleanInput } from '@angular/cdk/coercion';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatCheckboxModule, MatRadioModule, MatButtonModule],
  templateUrl: './forms.component.html',
})
export class FormsComponent  {
onBack() {
throw new Error('Method not implemented.');
}
checked: BooleanInput;
  constructor() { }

  onSubmit(form: NgForm) {
    // Validate the form on submission
    if (form.invalid) {
      // Angular will handle displaying validation errors on each field
      return;
    }

    // Additional custom validations can be added here if needed

    // If all validations pass, you can proceed with form submission
    this.submitForm();
  }

  submitForm() {
    // Simulate form submission or perform other actions
    alert('Form submitted successfully');
    // Reset the form after successful submission
    // You can use Angular's form reset method or clear individual form fields
    // Example: form.resetForm();
  }

}


