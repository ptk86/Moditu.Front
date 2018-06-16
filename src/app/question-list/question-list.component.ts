import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionListService } from './question-list.service';
import { Question } from './question';
import { interval, Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: []
})
export class QuestionListComponent implements OnInit, OnDestroy {
  questions: Question[];
  sub$: Subscription;

  constructor(private questionListService: QuestionListService) { }

  ngOnInit() {
    this.sub$ = interval(5000)
                  .subscribe(
                    () => this.questionListService.getQuestions()
                                                  .subscribe(d =>{
                                                    this.questions = d;
                                                    console.log(d);
                                                  }));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
