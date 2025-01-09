import { Component } from '@angular/core';
import { HeaderComponent } from '../../features/home/components/header/header.component';
import { HeroComponent } from '../../features/home/components/hero/hero.component';
import { DescriptionComponent } from '../../features/home/components/description/description.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, HeroComponent, DescriptionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
