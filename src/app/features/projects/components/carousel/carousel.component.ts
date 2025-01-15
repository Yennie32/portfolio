import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselService, Project } from '../../service/carousel.service';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  projects: Project[] = [];

  get selectedProject(): number {
    return this.carouselService.getSelectedProject();
  }

  constructor(private carouselService: CarouselService) {
    this.projects = this.carouselService.getProjects();
  }

  selectProject(id: number) {
    this.carouselService.selectProject(id);
  }
}
