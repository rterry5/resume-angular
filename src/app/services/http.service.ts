import { Submission } from './../domain/submission';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private httpService: HttpClient) { }

  private submissions: Submission[] = [];
  private submittedForms = new Subject<Submission[]>();

  submitForm(id: number, email: string, content: string) {
    const submission: Submission = {id: id, email: email, content: content};
    this.submissions.push(submission);
  }

  getSubmittedForms() {
    this.httpService.get<{message: string, submissions: Submission[]}>('http://localhost:3000/api/contact')
      .subscribe((submissionData) => {
        this.submissions = submissionData.submissions;
        this.submittedForms.next([...this.submissions]);
      });
  }
}
