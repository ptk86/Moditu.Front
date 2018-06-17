import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuestionListService } from './question-list.service';
import { Question } from './question';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styles: [`
  .card{
    width:20%;
    margin: 10px;
  }
  .card-icon{
    margin-left: 15px;
  }
  `]
})
export class QuestionListComponent implements OnInit, OnDestroy {
  questions: Question[] = [];
  sub$: Subscription;

  constructor(private questionListService: QuestionListService) { }

  ngOnInit() {
    this.sub$ = interval(2000)
                  .subscribe(
                    () => this.questionListService.getQuestions()
                                                  .subscribe(d =>{
                                                    this.questions =  [...d];
                                                  }));
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }
}
