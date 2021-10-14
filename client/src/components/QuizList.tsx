import IQuiz from "../data/IQuiz";
import QuizCard from "./QuizCard";
import SetPageHandler from "../SetPageHandler";

interface IQuizListProps {
  quizes: IQuiz[];
  setPage: SetPageHandler;
}

export default function QuizList(props: IQuizListProps) {
  return (
    <>
      {props.quizes.map((quiz) => (
        <QuizCard setPage={props.setPage} key={quiz.id} quiz={quiz} />
      ))}
    </>
  );
}
