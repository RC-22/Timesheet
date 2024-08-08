// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
// import { CommonModule } from '@angular/common';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatIconModule } from '@angular/material/icon';
// import { MatTooltipModule } from '@angular/material/tooltip';

// @Component({
//   selector: 'app-project',
//   standalone: true,
//   imports: [
//     ReactiveFormsModule, // Include ReactiveFormsModule
//     MatDatepickerModule,
//     MatFormFieldModule,
//     MatInputModule,
//     MatButtonModule,
//     MatTooltipModule,
//     MatIconModule,
//     CommonModule
//   ],
//   templateUrl: './project.component.html',
//   styleUrls: ['./project.component.scss']
// })
// export class ProjectComponent implements OnInit {
//   projectForm: FormGroup;

//   constructor(private fb: FormBuilder) {
//     this.projectForm = this.fb.group({
//       projectName: ['', Validators.required],
//       projectCreationDate: ['', Validators.required],
//       assignTo: [''],
//       dueDate: ['', Validators.required],
//       clientName: [''],
//       note: ['']
//     });
//   }

//   ngOnInit(): void {}

//   onSubmit(): void {
//     if (this.projectForm.valid) {
//       console.log('Form Submitted', this.projectForm.value);
//     }
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

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
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: ['', Validators.required],
      projectCreationDate: ['', Validators.required],
      assignTo: [''],
      dueDate: ['', Validators.required],
      clientName: [''],
      note: ['']
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.projectForm.valid) {
      console.log('Form Submitted', this.projectForm.value);
      // Add your logic to handle form submission
    } else {
      console.log('Form is invalid');
      this.projectForm.markAllAsTouched(); // Mark all controls as touched to trigger validation errors
    }
  }
}
