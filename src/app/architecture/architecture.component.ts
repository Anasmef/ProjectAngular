import { Component } from '@angular/core';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent {
  downloadPPT() {
    const link = document.createElement('a');
    link.href = 'assets/architecture-presentation.pptx'; // Chemin vers votre fichier
    link.download = 'architecture-presentation.pptx';
    link.click();
  }
  openPPT() {
    const url = 'assets/architecture-presentation.pptx'; // Chemin vers votre fichier
    window.open(url, '_blank'); // Ouvre le fichier dans un nouvel onglet ou une nouvelle fenêtre
  }
}
