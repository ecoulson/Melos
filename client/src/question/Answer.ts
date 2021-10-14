export default class Answer {
  private title: string;
  private country: string;

  constructor(title: string, country: string) {
    this.title = title;
    this.country = country;
  }

  equals(other: Answer) {
    return this.title === other.title && this.country === other.country;
  }

  toString() {
    return `${this.title} - ${this.country}`;
  }
}
