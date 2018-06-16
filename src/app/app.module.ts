import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { QuestionListComponent } from './question-list/question-list.component';

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
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
