import { Component } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgFor } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DemoFlexyModule } from 'src/app/demo-flexy-module';

@Component({
  selector: 'app-module',
  standalone: true,
  imports: [DemoFlexyModule, MatFormFieldModule, MatChipsModule, NgFor, MatIconModule],
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class moduleComponent {
  
}
