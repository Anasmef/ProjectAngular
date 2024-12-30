import { Component } from '@angular/core';

@Component({
  selector: 'app-conclusion',
  templateUrl: './conclusion.component.html',
  styleUrls: ['./conclusion.component.css']
})
export class ConclusionComponent {
  currentSlideIndex = 0; // L'index de la diapositive active
  
  slides = [
    {
      title: 'Conclusion de l\'atelier',
      content: 'Cet atelier nous a permis d\'explorer Angular, un framework moderne qui permet de créer des applications web dynamiques et bien structurées.',
      list: []
    },
    {
      title: 'Pourquoi Angular ?',
      content: 'Angular se distingue par sa modularité, sa facilité d\'intégration, et son écosystème riche. Il est particulièrement adapté pour des applications complexes et performantes.',
      list: ['Modularité', 'TypeScript', 'Écosystème riche', 'Prise en charge de PWA']
    }
  ];

  teamMembers = [
    {
      name: 'Membre 1',
      role: 'Développeur Frontend',
      contact: 'membre1@email.com',
      bio: 'Passionné par le développement web et spécialisé dans les frameworks JavaScript modernes.'
    },
    {
      name: 'Membre 2',
      role: 'Développeur Backend',
      contact: 'membre2@email.com',
      bio: 'Expérimenté dans le développement backend avec Node.js et l\'intégration d\'APIs.'
    },
    {
      name: 'Membre 3',
      role: 'Designer UI/UX',
      contact: 'membre3@email.com',
      bio: 'Designer avec un œil pour les détails, créant des interfaces utilisateur intuitives et agréables.'
    },
    {
      name: 'Membre 4',
      role: 'Chef de projet',
      contact: 'membre4@email.com',
      bio: 'Responsable de la gestion de projets et de la coordination d\'équipes agiles.'
    }
  ];

  nextSlide() {
    if (this.currentSlideIndex < this.slides.length - 1) {
      this.currentSlideIndex++;
    }
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }
}
