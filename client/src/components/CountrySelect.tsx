import { Combobox } from "evergreen-ui";
import IQuiz from "../data/IQuiz";

type HandleSetCountry = (country: string) => void;

interface ICountrySelectProps {
  setCountry: HandleSetCountry;
  quiz: IQuiz;
}

export default function CountrySelect(props: ICountrySelectProps) {
  return (
    <Combobox
      onChange={props.setCountry}
      items={props.quiz.files.reduce<string[]>((previous, file) => {
        if (!previous.includes(file.countryOfOrigin)) {
          return [...previous, file.countryOfOrigin];
        }
        return previous;
      }, [])}
    />
  );
}
