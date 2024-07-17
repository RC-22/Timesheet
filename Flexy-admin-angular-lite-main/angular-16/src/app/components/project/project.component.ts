import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { MatTooltipModule } from '@angular/material/tooltip';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [DemoFlexyModule, MatButtonModule, MatTooltipModule, MatIconModule],
  templateUrl: './project.component.html',
})
export class projectComponent  {
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      creationDate: ['', Validators.required],
      assignTo: [''],
      dueDate: ['', Validators.required],
      clientName: [''],
      note: ['']
    }); 
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value); // Replace with your form submission logic
    } else {
      // Mark all fields as touched to display validation messages
      this.markFormGroupTouched(this.projectForm);
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

