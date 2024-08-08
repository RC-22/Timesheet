import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Ensure this is correctly set
})
export class ProjectDataService {
  private projects: any[] = [];

  getProjects() {
    return this.projects;
  }

  addProject(project: any) {
    this.projects.push(project);
  }
}
