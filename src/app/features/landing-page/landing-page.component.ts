import { Component } from '@angular/core';
import { HomePageComponent } from '../home/pages/home-page/home-page.component';
import { ProjectPageComponent } from '../projects/pages/project-page/project-page.component';
import { HeaderComponent } from '../home/components/header/header.component';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from '../contact/pages/contact-page/contact-page.component';
import { AboutMePageComponent } from '../about-me/pages/about-me-page/about-me-page.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HeaderComponent,
    HomePageComponent,
    ProjectPageComponent,
    CommonModule,
    ContactPageComponent,
    AboutMePageComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
