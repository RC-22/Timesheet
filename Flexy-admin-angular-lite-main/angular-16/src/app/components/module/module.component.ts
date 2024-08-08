import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class moduleComponent implements OnInit {
  projectForm!: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      assignTo: ['', Validators.required],
      moduleName: ['', Validators.required],
      startDate: [null, Validators.required],
      moduleDescription: ['', Validators.required],
      dueDate: [null, Validators.required]
    });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      console.log('Form Submitted', this.projectForm.value);
      this.successMessage = 'Module created successfully';
      this.projectForm.reset();
      setTimeout(() => {
        this.successMessage = null;
      }, 3000);
    } else {
      console.log('Form is not valid');
      this.projectForm.markAllAsTouched();
    }
  }

  onDateChange(event: MatDatepickerInputEvent<Date>): void {
    const date = event.value;
    const controlName = (event.target as unknown as HTMLInputElement).getAttribute('id');
    
    if (controlName === 'startDate') {
      this.projectForm.get('startDate')?.setValue(date);
    } else if (controlName === 'dueDate') {
      this.projectForm.get('dueDate')?.setValue(date);
    }
  }
}
