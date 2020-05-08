export class Project {

  public title: string;
  public subtitle: string;
  public imagePath: string;
  public description: string;
  public url: string;

  constructor(title: string, subtitle: string, image: string, desc: string, url: string) {
    this.title = title;
    this.subtitle = subtitle;
    this.imagePath = image;
    this.description = desc;
    this.url = url;
  }

}
