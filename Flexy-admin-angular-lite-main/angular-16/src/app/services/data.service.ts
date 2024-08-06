import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  getProjects(): any[] {
    throw new Error('Method not implemented.');
  }
  private projectData: any;

  setData(data: any): void {
    this.projectData = data;
  }

  getData(): any {
    return this.projectData;
  }
}
