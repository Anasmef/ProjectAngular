import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { QuizComponent } from './quiz/quiz.component';
import { IntroductionComponent } from './introduction/introduction.component'; 
import { ConclusionComponent } from './conclusion/conclusion.component'; 
import { ArchitectureComponent } from './architecture/architecture.component'; 

const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'about', component: AboutComponent }, // Page "À propos"
  { path: 'services', component: ServicesComponent }, // Page des services
  { path: 'contact', component: ContactComponent }, // Page de contact
  { path: 'quiz', component: QuizComponent },
  { path: 'introduction', component: IntroductionComponent },
  { path: 'conclusion', component: ConclusionComponent },
  { path: 'architecture', component: ArchitectureComponent },



  { path: '', component: ServicesComponent },
  { path: 'admin', component: AdminComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
