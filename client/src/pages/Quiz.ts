import IQuiz from "../data/IQuiz";
import Page from "./Page";
import PageType from "./PageType";

export interface IQuizPageProps {
  quiz: IQuiz;
}

export default class QuizPage extends Page<IQuizPageProps> {
  constructor(quiz: IQuiz) {
    super(PageType.Quiz, {
      quiz,
    });
  }
}
