import { Heading, Pane, toaster } from "evergreen-ui";
import { useCallback, useEffect, useState } from "react";
import IQuiz from "../data/IQuiz";
import Audio from "../audio/Audio";
import AudioPlayer from "./AudioPlayer";
import Question from "../question/Question";
import AnswerInput from "./AnswerInput";
import Answer from "../question/Answer";
import RegionList from "./ReigonList";

export interface IQuizPageProps {
  quiz: IQuiz;
}

export default function QuizPage(props: IQuizPageProps) {
  const [audio, setAudio] = useState<Audio | null>(null);
  const [answer, setAnswer] = useState<Answer>(new Answer("", ""));

  const getNextQuestion = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * props.quiz.files.length);
    const selectedFile = props.quiz.files[randomIndex];
    const audio = new Audio(selectedFile);
    const question = new Question(audio);
    setAnswer(new Answer(selectedFile.title, selectedFile.countryOfOrigin));

    audio.onLoad(() => {
      setAudio(audio);
      question.run();
    });
  }, [props.quiz.files]);

  useEffect(() => {
    getNextQuestion();
  }, [getNextQuestion]);

  function handleGuess(guess: Answer) {
    if (guess.equals(answer)) {
      toaster.success("Correct!");
    } else {
      toaster.danger(`Incorrect. The answer was ${answer.toString()}`);
    }
    setAudio(null);
    getNextQuestion();
  }

  return (
    <Pane display="flex" flexDirection="column" alignItems="center">
      <Heading marginTop="25px" size={800}>
        {props.quiz.name}
      </Heading>
      <Pane marginY="30px">
        <RegionList regions={props.quiz.regions} />
      </Pane>
      <AudioPlayer audio={audio} />
      <AnswerInput quiz={props.quiz} handleAnswer={handleGuess} />
    </Pane>
  );
}
