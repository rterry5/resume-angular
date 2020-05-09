import { Component, OnInit } from "@angular/core";
import { Skill } from "src/app/domain/skill";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.scss"],
})
export class IntroComponent implements OnInit {
  skills: Skill[] = [
    new Skill(
      `HTML`,
      // tslint:disable-next-line: max-line-length
      `I played around with HTML since back in the MySpace days, but within the last two years I decided to jump back in, and have really put effort into creating clean, organized markup.`
    ),
    new Skill(
      "CSS",
      // tslint:disable-next-line: max-line-length
      `Since I've been more serious with developing, I've learned so much in CSS that I didn't even know existed, which has helped me improve my skills in making maintainable code.`
    ),
    new Skill(
      `JavaScipt`,
      // tslint:disable-next-line: max-line-length
      `Only within the last year have I seriously started learning JS, something I wish I had done years ago. I'm not an expert, but I've slowly been creating more projects to become comfortable creating functional websites.`
    ),
    new Skill(
      `Angular`,
      // tslint:disable-next-line: max-line-length
      `I created this website in Angular after being thrown into the deep end at my job to work on Angular conversions. Initially I knew nothing, but it's becoming more manageable and fun to work in Angular. `
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
