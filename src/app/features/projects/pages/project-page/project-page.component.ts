import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-project-page',
  imports: [PageTitleComponent, CommonModule, NgFor, NgForOf],
  standalone: true,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
})
export class ProjectPageComponent {
  slides = [
    {
      title: 'Slide1',
      image: './assets/img/mock-image.jpeg',
      description: 'Description slide 1',
    },
    {
      title: 'Slide2',
      image: './assets/img/mock-image2.jpeg',
      description: 'Description slide 2',
    },
    {
      title: 'Slide3',
      image: './assets/img/mock-image3.jpeg',
      description: 'Description slide 3',
    },
  ];
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }
  previousSlide() {
    this.currentSlide =
      (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
