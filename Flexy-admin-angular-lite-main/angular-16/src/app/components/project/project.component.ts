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
  styleUrls:['./project.component.scss'],
})
export class projectComponent  {
  projectForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectCreationDate: [''],
      assignTo: [''],
      dueDate: [''],
      clientName: [''],
      note: ['']
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log(this.projectForm.value); // Replace with your logic to handle form submission
    } else {
      // Mark all fields as touched to display validation errors
      this.projectForm.markAllAsTouched();
    }
  }
}


