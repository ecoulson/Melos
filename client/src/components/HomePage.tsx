import { Pane } from "evergreen-ui";
import IQuiz from "../data/IQuiz";
import QuizList from "./QuizList";
import SetPageHandler from "../SetPageHandler";

export interface IHomePageProps {
  quizzes: IQuiz[];
  setPage: SetPageHandler;
}

export default function HomePage(props: IHomePageProps) {
  return (
    <Pane
      height="600px"
      boxSizing="border-box"
      padding="20px"
      display="grid"
      gridTemplateColumns="300px 300px"
      gap="20px"
    >
      <QuizList setPage={props.setPage} quizes={props.quizzes} />
    </Pane>
  );
}
