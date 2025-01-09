import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { DescriptionComponent } from '../../components/description/description.component';

@Component({
  selector: 'app-home-page',
  imports: [HeroComponent, DescriptionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
