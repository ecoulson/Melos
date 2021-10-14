import Navbar from "./components/Navbar";
import QuizDatabase from "./data/QuizDatabase";
import "./index.css";
import { Pane } from "evergreen-ui";
import PageLookup from "./components/PageLookup";
import { useState } from "react";
import { HomePage } from "./pages/HomePage";
import Page from "./pages/Page";

const homePage = new HomePage(QuizDatabase.quizzes);

function App() {
  const [page, setPage] = useState<Page>(homePage);

  return (
    <Pane display="flex" flexDirection="column">
      <Navbar homePage={homePage} setPage={setPage} />
      <Pane marginX="auto">
        <PageLookup setPage={setPage} currentPage={page} />
      </Pane>
    </Pane>
  );
}

export default App;
