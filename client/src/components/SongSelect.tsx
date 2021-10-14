import { Combobox } from "evergreen-ui";
import IQuiz from "../data/IQuiz";

type SetSongTitleHandler = (title: string) => void;

interface ISongSelectProps {
  quiz: IQuiz;
  setSongTitle: SetSongTitleHandler;
}

export default function SongSelect(props: ISongSelectProps) {
  return (
    <Combobox
      items={props.quiz.files.map((file) => file.title)}
      onChange={props.setSongTitle}
    />
  );
}
