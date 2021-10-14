import { Button, Card, Heading } from "evergreen-ui";
import IQuiz from "../data/IQuiz";
import QuizPage from "../pages/Quiz";
import RegionList from "./ReigonList";
import SetPageHandler from "../SetPageHandler";

interface IQuizCardProps {
  quiz: IQuiz;
  setPage: SetPageHandler;
}

export default function QuizCard(props: IQuizCardProps) {
  function handleClick() {
    props.setPage(new QuizPage(props.quiz));
  }

  return (
    <Card
      elevation={1}
      border="default"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      flexDirection="column"
    >
      <Heading size={600} margin="25px">
        {props.quiz.name}
      </Heading>
      <RegionList regions={props.quiz.regions} />
      <Button onClick={handleClick} appearance="primary" margin="10px">
        Practice
      </Button>
    </Card>
  );
}
