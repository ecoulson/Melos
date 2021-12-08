import { Button, Card, Heading } from "evergreen-ui";
import IQuiz from "../data/IQuiz";
import QuizPage from "../pages/Quiz";
import RegionList from "./ReigonList";
import SetPageHandler from "../SetPageHandler";
import Region from "../data/Region";

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
			width="300px"
			boxSizing="border-box"
			border="default"
			display="flex"
			justifyContent="space-evenly"
			alignItems="center"
			flexDirection="column"
		>
			<Heading size={600} margin="25px">
				{props.quiz.name}
			</Heading>
			<RegionList
				regions={props.quiz.regions.filter((x) => x !== Region.Bali)}
			/>
			<Button onClick={handleClick} appearance="primary" marginY="25px">
				Practice
			</Button>
		</Card>
	);
}
