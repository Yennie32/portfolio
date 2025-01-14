import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Projects {
  id: number;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  selectedProject = 4; // Default active project

  projects: Projects[] = [
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

  selectProject(id: number) {
    this.selectedProject = id;
  }
}
