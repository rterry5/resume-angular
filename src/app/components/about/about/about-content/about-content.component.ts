import { Component, OnInit } from "@angular/core";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: "app-about-content",
  templateUrl: "./about-content.component.html",
  styleUrls: ["./about-content.component.scss"],
})
export class AboutContentComponent implements OnInit {
  tiles: Tile[] = [
    { text: "One", cols: 3, rows: 1, color: "#2575fc" },
    { text: "Two", cols: 1, rows: 2, color: "#0ccf9f" },
    { text: "Three", cols: 1, rows: 1, color: "#6a11cb" },
    { text: "Four", cols: 2, rows: 1, color: "#fc466b" },
  ];

  constructor() {}

  ngOnInit() {}
}
