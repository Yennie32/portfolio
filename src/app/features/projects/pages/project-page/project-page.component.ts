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
      infos: 'X coéquipiers, Langage : gnagnagnagna',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis similique consequuntur dolor, beatae deserunt consectetur ad repellat eos reprehenderit provident expedita excepturi rem possimus fugiat culpa modi facilis voluptatem hic libero. Fugiat voluptatum iure, quas possimus perferendis delectus eaque dignissimos accusamus debitis repudiandae repellendus esse quisquam assumenda necessitatibus ips',
      github: 'github',
    },
    {
      title: 'Slide2',
      image: './assets/img/mock-image2.jpeg',
      infos: 'X coéquipiers, Langage : gnagnagnagna',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis similique consequuntur dolor, beatae deserunt consectetur ad repellat eos reprehenderit provident expedita excepturi rem possimus fugiat culpa modi facilis voluptatem hic libero. Fugiat voluptatum iure, quas possimus perferendis delectus eaque dignissimos accusamus debitis repudiandae repellendus esse quisquam assumenda necessitatibus ips',
      github: 'github',
    },
    {
      title: 'Slide3',
      image: './assets/img/mock-image3.jpeg',
      infos: 'X coéquipiers, Langage : gnagnagnagna',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi corporis similique consequuntur dolor, beatae deserunt consectetur ad repellat eos reprehenderit provident expedita excepturi rem possimus fugiat culpa modi facilis voluptatem hic libero. Fugiat voluptatum iure, quas possimus perferendis delectus eaque dignissimos accusamus debitis repudiandae repellendus esse quisquam assumenda necessitatibus ips',
      github: 'github',
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
