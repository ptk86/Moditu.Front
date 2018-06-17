import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/question-list/question';
import { QuestionListService } from './question-list.service';

@Component({
  selector: 'app-new-question',
  template: `
  <form class="form" (ngSubmit)="onSubmit()" #questionForm="ngForm">
    <mat-form-field class="full-width">
        <input matInput placeholder="Add a comment" [(ngModel)]="comment" [ngModelOptions]="{standalone: true}" value="">
    </mat-form-field>
  </form>
  `,
  styles: [`
    .form{
      margin: 10px;
      width: 40%;
    }
    .full-width{
      with: 100%;
    }
  `]
})
export class NewQuestionComponent {
  comment = '';

  onSubmit(){
    console.log(this.comment);
    if(this.comment && this.comment !== ''){
      this.questionListService.addQuestion(this.comment);
    }
    this.comment = '';
  }

  constructor(private questionListService: QuestionListService) { }
}
