import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {
  @Input() data!: { questionText: string; options: string[]; };
  @Input() questionNumber!: number;
  @Output() answerSelected = new EventEmitter<{ questionIndex: number; selectedOption: string }>();

  onOptionSelected(option: string) {
    this.answerSelected.emit({ questionIndex: this.questionNumber - 1, selectedOption: option });
  }
}
