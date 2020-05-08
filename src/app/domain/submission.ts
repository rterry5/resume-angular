export class Submission {

  public id: number;
  public email: string;
  public content: string;

  constructor(id: number, email: string, content: string) {
    this.id = id;
    this.email = email;
    this.content = content;
  }

}
