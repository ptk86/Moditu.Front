import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Question } from 'src/app/question-list/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {
  baseUrl = 'http://localhost:49258/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
};
  constructor(private http: HttpClient) { }

  getQuestions() {
    return this.http.get<Question[]>(`${this.baseUrl}/comments`);
  }

  addQuestion(text: string) {
    this.http.post(`${this.baseUrl}/comments`, { text: text }, this.httpOptions).subscribe();
  }
}