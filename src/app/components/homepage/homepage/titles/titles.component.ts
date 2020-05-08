import { Component, OnInit } from "@angular/core";
import { Title } from "src/app/domain/title";

@Component({
  selector: "app-titles",
  templateUrl: "./titles.component.html",
  styleUrls: ["./titles.component.scss"],
})
export class TitlesComponent implements OnInit {
  jobTitles: Title[] = [
    // tslint:disable-next-line: max-line-length
    new Title(
      `Front End Developer`,
      `I implement user-friendly, responsive web designs and updates to company and consumer-facing websites.`,
      "code-slash-sharp"
    ),
    new Title(
      `Solutions Analyst`,
      `I performed daily website maintenance tasks and provided support to
    stakeholders for existing websites and applications.I also evaluated, tested and recommended
    new opportunities for enhancing our software, hardware and IT processes.`,
      "desktop-sharp"
    ),
    new Title(
      `SEO Specialist`,
      `I implemented content and increased the overall ecommerce conversion rate by
    75% in a year, increased social conversions and created and optimized site and blog content.`,
      "globe-sharp"
    ),
  ];

  constructor() {}

  ngOnInit() {}
}
