// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-product',
//   templateUrl: './product.component.html',
//   styleUrls: ['./product.component.scss']
// })
// export class ProductComponent implements OnInit {
//   displayedColumns: string[] = ['projectName', 'projectCreationDate', 'assignTo', 'dueDate', 'clientName', 'note'];
//   projectData = [
//     // {
//     //   projectName: 'Project A',
//     //   projectCreationDate: new Date('2024-01-01'),
//     //   assignTo: 'Member A',
//     //   dueDate: new Date('2024-01-31'),
//     //   clientName: 'Client A',
//     //   note: 'Initial project setup'
//     // },
//     // Add more project data objects here
//   ];

//   constructor() { }

//   ngOnInit(): void {
//   }
// }
import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/services/project-data.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  displayedColumns: string[] = ['projectName', 'projectCreationDate', 'assignTo', 'dueDate', 'clientName', 'note'];
  projectData: any[] = [];

  constructor(private projectDataService: ProjectDataService) { }

  ngOnInit(): void {
    // Load data from the service
    this.projectData = this.projectDataService.getProjects();
  }
}
