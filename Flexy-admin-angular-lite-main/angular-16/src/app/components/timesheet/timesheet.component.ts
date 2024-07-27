import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss'],
})
export class timesheetComponent implements OnInit {
  startTime: string = '';
  endTime: string = '';
  totalHours: number = 0;
  ngOnInit() {}
  calculateTotalHours() {
    if (this.startTime && this.endTime) {
      const start = this.convertToMinutes(this.startTime);
      const end = this.convertToMinutes(this.endTime);
      this.totalHours = (end - start) / 60;
    } else {
      this.totalHours = 0; // Ensure totalHours is reset if times are invalid
      console.log('time');
    }
  }
  convertToMinutes(time: string): number {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }
}