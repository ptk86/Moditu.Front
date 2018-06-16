import { Component, OnInit } from '@angular/core';
import { QuestionListService } from './question-list.service';
import { Question } from './question';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: []
})
export class QuestionListComponent implements OnInit {
  questions: Question[];
  constructor(private questionListService: QuestionListService) { }

  ngOnInit() {
    this.questionListService.getQuestions().subscribe((data: Question[]) => {
      this.questions = { ...data };
      console.log(this.questions);
    });
  }
}
