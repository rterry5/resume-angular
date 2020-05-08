import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/domain/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [
    new Project(
      'Cat Shuffle',
      'HTML, CSS, JavaScipt/API',
      'assets/images/projects/cats.png',
      'Cat Shuffle was a basic one page application that I used to dabble with APIs.',
      'https://rterry5.github.io/cats/'),
    new Project(
      'Kombucha',
      'HTML & CSS',
      'assets/images/projects/small-website.png',
      // tslint:disable-next-line: max-line-length
      'I had gotten an idea for a bright, fun little site from a friend who makes her own kombucha. The name "Bombucha" came from my girlfriend who suggested it as a name for the product itself.',
      'https://rterry5.github.io/Small-Business-Website/' ),
    new Project(
      'Portfolio',
      'HTML, CSS, Angular',
      'assets/images/projects/portfolio.png',
      'Of course, this is the website you are currently one. I am working on creating more projects to stick here!',
      'https://rebeccaterry.dev/')
  ];

  constructor() { }

  ngOnInit() {
  }

}
