import { Component,OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';
@Component({
  selector: 'app-timesheet',
  standalone: true,
  imports: [DemoFlexyModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.scss']
})
export class timesheetComponent { 
  
}
