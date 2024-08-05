// import { NgFor } from '@angular/common';
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatChipsModule } from '@angular/material/chips';
// import { MatDatepickerInputEvent } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatIconModule } from '@angular/material/icon';
// import { DemoFlexyModule } from 'src/app/demo-flexy-module';

// @Component({
//   selector: 'app-module',
//   standalone: true,
//   imports: [DemoFlexyModule, MatFormFieldModule, MatChipsModule, NgFor, MatIconModule],
//   templateUrl: './module.component.html',
//   styleUrls: ['./module.component.scss']
// })
// export class ModuleComponent implements OnInit {
//   projectForm: FormGroup | undefined;
//   startDate: Date | null = null;
//   dueDate: Date | null = null;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.projectForm = this.fb.group({
//       projectName: ['', Validators.required],
//       assignTo: ['', Validators.required],
//       moduleName: ['', Validators.required],
//       startDate: [null, Validators.required],
//       moduleDescription: ['', Validators.required],
//       dueDate: [null, Validators.required]
//     });
//   }

//   onSubmit(): void {
//     if (this.projectForm.valid) {
//       // Handle form submission
//       console.log('Form Submitted', this.projectForm.value);
//     } else {
//       // Display validation errors
//       console.log('Form is not valid');
//       this.projectForm.markAllAsTouched();
//     }
//   }

//   onDateChange(event: MatDatepickerInputEvent<Date>): void {
//     const date = event.value;
//     if (event.target?.id === 'startDate') {
//       this.startDate = date;
//     } else if (event.target?.id === 'dueDate') {
//       this.dueDate = date;
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/form-field';

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
      // Handle form submission
      console.log('Form Submitted', this.projectForm.value);
    } else {
      // Display validation errors
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
