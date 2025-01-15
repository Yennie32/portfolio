import { Component } from '@angular/core';

interface Projects {
  id: number;
  name: string;
  role: string;
  image: string;
  description?: string;
}

@Component({
  selector: 'app-project-list',
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css',
})
export class ProjectListComponent {
  selectedProject = 4; // Default active project
  projects: Projects[] = [];

  selectProject(id: number) {
    this.selectedProject = id;
  }
}
