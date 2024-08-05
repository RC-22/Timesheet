import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker'; // Ensure this module is installed

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule
  ],
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class timesheetComponent implements OnInit {
  timesheetForm!: FormGroup;
  totalHours: number = 0;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.timesheetForm = this.fb.group({
      date: ['', Validators.required],
      projectName: ['', Validators.required],
      module: ['', Validators.required],
      task: ['', Validators.required],
      taskDescription: [''],
      type: [''],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required]
    });

    this.timesheetForm.get('startTime')?.valueChanges.subscribe(() => this.calculateTotalHours());
    this.timesheetForm.get('endTime')?.valueChanges.subscribe(() => this.calculateTotalHours());
  }

  onSubmit() {
    if (this.timesheetForm.valid) {
      console.log('Form Submitted', this.timesheetForm.value);
    } else {
      this.timesheetForm.markAllAsTouched();
    }
  }

  calculateTotalHours() {
    const startTime = this.timesheetForm.get('startTime')?.value;
    const endTime = this.timesheetForm.get('endTime')?.value;

    if (startTime && endTime) {
      const start = this.convertToMinutes(startTime);
      const end = this.convertToMinutes(endTime);
      this.totalHours = (end - start) / 60;
    } else {
      this.totalHours = 0; // Reset totalHours if times are invalid
    }
  }

  convertToMinutes(time: string): number {
    const [timeStr, period] = time.split(' ');
    const [hours, minutes] = timeStr.split(':').map(Number);
    const adjustedHours = period === 'PM' && hours !== 12 ? hours + 12 : period === 'AM' && hours === 12 ? 0 : hours;
    return adjustedHours * 60 + minutes;
  }
}
