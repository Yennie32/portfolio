import { Component } from '@angular/core';
import { HomePageComponent } from './features/home/pages/home-page/home-page.component';
import { ProjectPageComponent } from './features/projects/pages/project-page/project-page.component';
import { HeaderComponent } from './features/home/components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HomePageComponent,
    ProjectPageComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
