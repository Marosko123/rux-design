export default class UserReview {
  public author: string;
  public position: string;
  public company: string;
  public logo: string;
  public text: string;

  constructor(
    author: string,
    position: string,
    company: string,
    logo: string,
    text: string
  ) {
    this.author = author;
    this.position = position;
    this.company = company;
    this.logo = logo;
    this.text = text;
  }
}
