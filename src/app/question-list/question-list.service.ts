import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from 'src/app/question-list/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionListService {
  baseUrl = 'https://localhost:44317/api'
  constructor(private http: HttpClient) { }

  getQuestions(){
    return this.http.get<Question[]>(`${this.baseUrl}/questions`);
  }
}
