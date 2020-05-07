import { Submission } from './../../../../domain/submission';
import { HttpService } from './../../../../services/http.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    @Output()
    formSubmitted = new EventEmitter<Submission>();

    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

    messageFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getSubmittedForms();
  }

  onSubmitForm(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const submission: Submission = {
      id: null,
      email: form.value.email,
      content: form.value.content
    };
    this.formSubmitted.emit(submission);
  }

}
