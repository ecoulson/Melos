import { Button, Pane } from "evergreen-ui";
import { useState } from "react";
import IQuiz from "../data/IQuiz";
import Answer from "../question/Answer";
import CountrySelect from "./CountrySelect";
import SongSelect from "./SongSelect";

interface IAnswerInput {
  handleAnswer: (answer: Answer) => void;
  quiz: IQuiz;
}

export default function AnswerInput(props: IAnswerInput) {
  const [songTitle, setSongTitle] = useState("");
  const [country, setCountry] = useState("");

  function handleSubmit() {
    props.handleAnswer(new Answer(songTitle, country));
    setSongTitle("");
    setCountry("");
  }

  return (
    <Pane
      display="flex"
      gap="20px"
      justifyContent="center"
      flexDirection="column"
    >
      <SongSelect quiz={props.quiz} setSongTitle={setSongTitle} />
      <CountrySelect quiz={props.quiz} setCountry={setCountry} />
      <Button size="medium" appearance="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Pane>
  );
}
