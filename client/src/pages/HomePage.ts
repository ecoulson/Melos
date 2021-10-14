import IQuiz from "../data/IQuiz";
import Page from "./Page";
import PageType from "./PageType";

export interface IHomePageProps {
  quizzes: IQuiz[];
}

export class HomePage extends Page<IHomePageProps> {
  constructor(quizzes: IQuiz[]) {
    super(PageType.Home, {
      quizzes,
    });
  }
}
