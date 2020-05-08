import { Interest } from './../../../../domain/interest';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-content',
  templateUrl: './about-content.component.html',
  styleUrls: ['./about-content.component.scss'],
})
export class AboutContentComponent implements OnInit {
  interests: Interest[] = [
    new Interest(
      'Interests', 'Content about my interests'),
    new Interest(
      'Interests', 'Content about my interests'),
    new Interest(
      'Interests', 'Content about my interests'),
  ];

  constructor() {}

  ngOnInit() {}
}
