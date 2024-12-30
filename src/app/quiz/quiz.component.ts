
import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  questions = [
    {
      questionText: 'Quel framework est développé par Google ?',
      options: ['React', 'Vue', 'Angular', 'Svelte'],
      correctOption: 'Angular'
    },
    {
            questionText: 'En quelle année Angular a-t-il été lancé ?',
            options: ['2010', '2015', '2016', '2018'],
            correctOption: '2016'
          },
          {
            questionText: 'Quel langage Angular utilise-t-il principalement ?',
            options: ['JavaScript', 'Python', 'TypeScript', 'Ruby'],
            correctOption: 'TypeScript'
          },
          {
            questionText: 'Quel module Angular est utilisé pour la gestion des formulaires ?',
            options: ['HttpClientModule', 'FormsModule', 'RouterModule', 'CommonModule'],
            correctOption: 'FormsModule'
          },
          {
            questionText: 'Que représente le fichier "angular.json" dans un projet Angular ?',
            options: [
              'La configuration de TypeScript',
              'La configuration de l’application Angular',
              'La liste des dépendances',
              'Le point d’entrée principal'
            ],
            correctOption: 'La configuration de l’application Angular'
          },
          {
            questionText: 'Quel décorateur Angular est utilisé pour déclarer un composant ?',
            options: ['@Component', '@Directive', '@Injectable', '@Pipe'],
            correctOption: '@Component'
          },
          {
            questionText: 'Quel concept Angular facilite la communication entre parent et enfant ?',
            options: ['Services', '@Input et @Output', 'Templates', 'Lifecycle hooks'],
            correctOption: '@Input et @Output'
          },
          {
            questionText: 'Quel service Angular est utilisé pour effectuer des requêtes HTTP ?',
            options: ['Router', 'HttpClient', 'FormsService', 'LifecycleService'],
            correctOption: 'HttpClient'
          },
          {
            questionText: 'Quel est le rôle de "ngOnInit" dans un composant Angular ?',
            options: [
              'Définir un template HTML',
              'Initialiser un composant après sa création',
              'Déclencher une requête HTTP',
              'Gérer les erreurs'
            ],
            correctOption: 'Initialiser un composant après sa création'
          },
          {
            questionText: 'Qu’est-ce qu’un "Observable" dans Angular ?',
            options: [
              'Un modèle pour les services',
              'Un moyen de gérer les données asynchrones',
              'Un élément de décoration',
              'Une directive'
            ],
            correctOption: 'Un moyen de gérer les données asynchrones'
          },
          {
            questionText: 'Quel est l’utilitaire de ligne de commande Angular ?',
            options: ['npm', 'CLI', 'Angular CLI', 'Grunt'],
            correctOption: 'Angular CLI'
          },
          {
            questionText: 'Comment Angular gère-t-il le "Two-way data binding" ?',
            options: [
              'Avec le service RxJS',
              'Avec les double crochets {{}}',
              'Avec [(ngModel)]',
              'Avec ngIf et ngFor'
            ],
            correctOption: 'Avec [(ngModel)]'
          },
          {
            questionText: 'Comment inclure une route enfant dans Angular ?',
            options: [
              'Avec la propriété "redirectTo"',
              'Avec un module spécial',
              'Avec la propriété "children"',
              'Avec @RouterChild'
            ],
            correctOption: 'Avec la propriété "children"'
          },
          {
            questionText: 'Quel opérateur RxJS est utilisé pour transformer une donnée ?',
            options: ['map', 'filter', 'subscribe', 'concat'],
            correctOption: 'map'
          },
          {
            questionText: 'Quel fichier contient les dépendances nécessaires à Angular ?',
            options: ['package.json', 'angular.json', 'main.ts', 'index.html'],
            correctOption: 'package.json'
          }
  ];

  userAnswers: string[] = Array(this.questions.length).fill(null);
  correctAnswers = 0;
  quizCompleted = false;

  // Gérer les réponses utilisateur
  handleAnswer(event: { questionIndex: number; selectedOption: string }) {
    this.userAnswers[event.questionIndex] = event.selectedOption;
  }

  // Valider le quiz et calculer le score
  submitQuiz() {
    this.correctAnswers = this.userAnswers.filter(
      (answer, index) => answer === this.questions[index].correctOption
    ).length;
    this.quizCompleted = true;
  }

  // Retourne le statut pour une question donnée
  getAnswerStatus(index: number): string {
    if (!this.quizCompleted) return '';
    return this.userAnswers[index] === this.questions[index].correctOption
      ? 'correct'
      : 'incorrect';
  }

  // Affiche les réponses correctes
  getCorrectOption(index: number): string {
    return this.questions[index].correctOption;
  }
}
