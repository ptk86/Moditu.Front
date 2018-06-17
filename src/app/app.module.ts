import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import {
  MatButtonModule,
  MatCardModule,
  MatInputModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { NewQuestionComponent } from './question-list/new-question.component';

const appRoutes: Routes = [
  {
    path: 'questions', component: QuestionListComponent, data: { title: 'Questions' }
  },
  {
    path: '', redirectTo: '/questions', pathMatch: 'full'
  },
  {
    path: '**', redirectTo: '/questions'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    NewQuestionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
