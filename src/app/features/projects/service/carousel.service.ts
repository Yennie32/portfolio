import { Injectable } from '@angular/core';

export interface Project {
  id: number;
  name: string;
  role: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private selectedProject: number;
  private projects: Project[];

  constructor() {
    this.selectedProject = 4;
    this.projects = [
      {
        id: 1,
        name: 'Mike',
        role: 'Web3 Developer',
        image: '/assets/img/1.png',
      },
      {
        id: 2,
        name: 'Samite',
        role: 'Wordpress Developer',
        image: '/assets/img/2.png',
      },
      {
        id: 3,
        name: 'Hashi',
        role: 'Java Developer',
        image: '/assets/img/3.png',
      },
      {
        id: 4,
        name: 'Kaity',
        role: 'Web Developer',
        image: '/assets/img/4.png',
      },
      {
        id: 5,
        name: 'Lauren',
        role: 'PHP Developer',
        image: '/assets/img/5.png',
      },
      {
        id: 6,
        name: 'Ryan',
        role: 'SEO Developer',
        image: '/assets/img/6.png',
      },
      {
        id: 7,
        name: 'Dakes',
        role: 'SQL Developer',
        image: '/assets/img/7.png',
      },
    ];
  }

  getProjects(): Project[] {
    return this.projects;
  }

  getSelectedProject(): number {
    return this.selectedProject;
  }

  selectProject(id: number): void {
    this.selectedProject = id;
  }
}
