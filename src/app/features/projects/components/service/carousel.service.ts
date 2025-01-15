// carousel.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export interface Project {
  id: number;
  name: string;
  role: string;
  image: string;
  description?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  private projects: Project[] = [
    {
      id: 1,
      name: 'Mike',
      role: 'Web3 Developer',
      image: '/assets/img/1.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
    {
      id: 2,
      name: 'Samite',
      role: 'Wordpress Developer',
      image: '/assets/img/2.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
    {
      id: 3,
      name: 'Hashi',
      role: 'Java Developer',
      image: '/assets/img/3.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
    {
      id: 4,
      name: 'Kaity',
      role: 'Web Developer',
      image: '/assets/img/4.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
    {
      id: 5,
      name: 'Lauren',
      role: 'PHP Developer',
      image: '/assets/img/5.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
    {
      id: 6,
      name: 'Ryan',
      role: 'SEO Developer',
      image: '/assets/img/6.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
    {
      id: 7,
      name: 'Dakes',
      role: 'SQL Developer',
      image: '/assets/img/7.png',
      description:
        'Positae eoo regiones iugum prominenti duae prominenti sub consule terrarum praedonum monte monte missae orbe a velut Servilio hae Amano duae quondam a lingua eoo vectigales consule provinciae factae duae orbe a vectigales consule praedonum Servilio catervis praedonum duae Servilio positae vectigales monte mixtae eoo mixtae prominenti regiones monte mixtae.',
    },
  ];
  export class CarouselService {
    private selectedProject = 4;

    getSelectedProject(): number {
      return this.selectedProject;
    }

    setSelectedProject(id: number): void {
      this.selectedProject = id;
    }

  }

  // getProjects(): Project[] {
  //   return this.projects;
  // }

  // selectProject(id: number): void {
  //   this.selectedProjectSubject.next(id);
  // }

  // pauseAutoplay(): void {
  //   this.autoplayPaused.next(true);
  // }

  // resumeAutoplay(): void {
  //   this.autoplayPaused.next(false);
  // }

  // private startAutoplay(): void {
  //   interval(3000)
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(() => {
  //       if (!this.autoplayPaused.value) {
  //         const currentId = this.selectedProjectSubject.value;
  //         const nextId = currentId >= this.projects.length ? 1 : currentId + 1;
  //         this.selectProject(nextId);
  //       }
  //     });
  // }

  // destroy(): void {
  //   this.destroy$.next();
  //   this.destroy$.complete();
  // }
}
