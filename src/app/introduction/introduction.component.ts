import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent {
  currentSlideIndex = 0; // Index de la diapositive active

  slides = [
    {
      title: 'Introduction à Angular',
      content: `
        Angular est un framework open-source développé par Google. 
        Il permet de créer des applications web dynamiques grâce à une architecture basée sur des composants.
      `,
      list: []
    },
    {
      title: 'Historique d’Angular',
      content: null,
      list: [
        '2010 : AngularJS (version 1), basé sur le modèle MVC.',
        '2016 : Angular 2, refonte complète avec TypeScript.',
        '2024 : Angular 19, dernières mises à jour et améliorations.'
      ]
    },
    {
      title: 'Pourquoi choisir Angular ?',
      content: `
        Angular est apprécié pour son architecture robuste, sa modularité et son support complet 
        pour le développement d'applications front-end modernes.
      `,
      list: ['TypeScript', 'Écosystème riche', 'Performances élevées', 'Support à long terme']
    },
    {
      title: 'Comment installer Angular et démarrer un projet ?',
      content: null,
      list: [
        'Installer Node.js depuis le site officiel : [nodejs.org](https://nodejs.org).',
        'Installer Angular CLI globalement : `npm install -g @angular/cli`.',
        'Créer un nouveau projet Angular : `ng new mon-projet-angular`.',
        'Naviguer dans le dossier du projet : `cd mon-projet-angular`.',
        'Démarrer le serveur de développement : `ng serve`.',
        'Ouvrir l’application dans le navigateur à l’adresse : [http://localhost:4200](http://localhost:4200).'
      ]
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
