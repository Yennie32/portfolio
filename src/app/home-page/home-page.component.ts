import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { HeroComponent } from '../hero/hero.component';
import { DescriptionComponent } from '../description/description.component';

@Component({
  selector: 'app-home-page',
  imports: [HeaderComponent, HeroComponent, DescriptionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {}
