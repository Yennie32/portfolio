import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
})
export class CarouselComponent implements OnInit {
  id!: number;
  name!: string;
  role!: string;
  image!: string;
  // description?: string;

  ngOnInit(): void {
    {
      this.id = 1;
      this.name = 'Mike';
      this.role = 'Web3 Developer';
      this.image = '/assets/img/1.png';
    }
    {
      this.id = 2;
      this.name = 'Samite';
      this.role = 'Wordpress Developer';
      this.image = '/assets/img/2.png';
    }
    {
      this.id = 3;
      this.name = 'Hashi';
      this.role = 'Java Developer';
      this.image = '/assets/img/3.png';
    }
    {
      this.id = 4;
      this.name = 'Kaity';
      this.role = 'Web Developer';
      this.image = '/assets/img/4.png';
    }
    {
      this.id = 5;
      this.name = 'Lauren';
      this.role = 'PHP Developer';
      this.image = '/assets/img/5.png';
    }
    {
      this.id = 6;
      this.name = 'Ryan';
      this.role = 'SEO Developer';
      this.image = '/assets/img/6.png';
    }
    {
      this.id = 7;
      this.name = 'Dakes';
      this.role = 'SQL Developer';
      this.image = '/assets/img/7.png';
    }
  }
}
