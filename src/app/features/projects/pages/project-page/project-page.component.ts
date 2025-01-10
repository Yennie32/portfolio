import { Component } from '@angular/core';
import { PageTitleComponent } from '../../../../shared/components/page-title/page-title.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';

@Component({
  selector: 'app-project-page',
  imports: [PageTitleComponent, CarouselComponent],
  standalone: true,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css',
})
export class ProjectPageComponent {}
