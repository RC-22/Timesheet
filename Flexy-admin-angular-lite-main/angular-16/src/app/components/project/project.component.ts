import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatIconModule,
    CommonModule
  ],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class projectComponent implements OnInit {
  projectForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      projectName: ['', Validators.required],
      projectCreationDate: [null, Validators.required],
      assignTo: [null, Validators.required],
      dueDate: [null, Validators.required],
      clientName: [null, Validators.required],
      note: ['']
    });
  }

  onSubmit() {
    if (this.projectForm.valid) {
      console.log('Form Submitted', this.projectForm.value);
    } else {
      this.projectForm.markAllAsTouched();
    }
  }
}