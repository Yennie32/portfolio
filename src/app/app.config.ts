import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration(),
  ],
};
