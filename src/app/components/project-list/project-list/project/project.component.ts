// tslint:disable-next-line: quotemark
import { Component, OnInit } from "@angular/core";
import { Project } from 'src/app/domain/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [
    new Project(
      'Cocktail Search',
      'Angular, Typescript, HTML, SCSS',
      'assets/images/projects/cocktails.png',
      'Search for cocktails by name. If you\'re not sure what to search, roll the cocktail dice for a random recipe.',
      'https://rterry5.github.io/cocktails/'
    ),
    new Project(
      'Pokédex',
      'Angular, Typescript, HTML, SCSS',
      'assets/images/projects/pokedex.png',
      'Currently adding new features little by little, I started creating a Pokédex to take a deeper dive into Angular and working with APIs and dynamic data',
      'https://rterry5.github.io/pokedex/'
    ),
    new Project(
      'Cat Shuffle',
      'HTML, CSS, JavaScipt/API',
      'assets/images/projects/cats.png',
      'Cat Shuffle was a basic one page application that I used to dabble with APIs.',
      'https://rterry5.github.io/cats/'
    ),
    new Project(
      'Kombucha',
      'HTML & CSS',
      'assets/images/projects/small-website.png',
      // tslint:disable-next-line: max-line-length
      'I had gotten an idea for a bright, fun little site from a friend who makes her own kombucha. The name "Bombucha" came from my girlfriend who suggested it as a name for the product itself.',
      'https://rterry5.github.io/Small-Business-Website/'
    ),
    new Project(
      'Tip Calculator',
      'HTML, CSS, JavaScript',
      'assets/images/projects/tip-calculator.png',
      'For practice purposes I created a tip calculator and plan on adding more features.',
      'https://rterry5.github.io/tip-calculator/'
    ),
    new Project(
      'Portfolio',
      'HTML, CSS, Angular',
      'assets/images/projects/portfolio.png',
      'Of course, this is the website you are currently on. I am working on creating more projects to stick here!',
      'https://rebeccaterry.dev/'
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
