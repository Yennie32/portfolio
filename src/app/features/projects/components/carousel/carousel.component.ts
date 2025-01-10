import { Component } from '@angular/core';
import { CommonModule, NgFor, NgForOf } from '@angular/common';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule, NgFor, NgForOf],
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent {
  slides = [
    {
      title: 'Slide1',
      image: './assets/img/mock-image.jpeg',
      description: 'Descrition slide 1',
    },
    {
      title: 'Slide2',
      image: './assets/img/mock-image.jpeg',
      description: 'Descrition slide 2',
    },
    {
      title: 'Slide3',
      image: './assets/img/mock-image.jpeg',
      description: 'Descrition slide 3',
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
