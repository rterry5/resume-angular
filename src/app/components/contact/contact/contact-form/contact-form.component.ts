import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
    emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

    messageFormControl = new FormControl('', [
    Validators.required
  ]);

  constructor() { }

  ngOnInit() {
  }

}
