import { IHomePageProps } from "../pages/HomePage";
import HomePage from "./HomePage";
import NotFoundPage from "./NotFoundPage";
import Page from "../pages/Page";
import PageType from "../pages/PageType";
import QuizPage, { IQuizPageProps } from "./QuizPage";
import SetPageHandler from "../SetPageHandler";

interface IPageLookupProps<T extends Page> {
  currentPage: T;
  setPage: SetPageHandler;
}

export default function PageLookup(props: IPageLookupProps<any>) {
  function castProps<T>() {
    return props.currentPage.props as T;
  }

  const PageMapping = new Map([
    [
      PageType.Home,
      <HomePage setPage={props.setPage} {...castProps<IHomePageProps>()} />,
    ],
    [PageType.Quiz, <QuizPage {...castProps<IQuizPageProps>()} />],
  ]);

  if (!PageMapping.has(props.currentPage.type)) {
    return <NotFoundPage />;
  }
  return PageMapping.get(props.currentPage.type)!;
}
