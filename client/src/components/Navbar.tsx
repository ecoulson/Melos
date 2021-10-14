import { HomeIcon, IconButton, Pane } from "evergreen-ui";
import { HomePage } from "../pages/HomePage";
import SetPageHandler from "../SetPageHandler";

interface INavbarProps {
  homePage: HomePage;
  setPage: SetPageHandler;
}

export default function Navbar(props: INavbarProps) {
  function onHomeClick() {
    props.setPage(props.homePage);
  }

  return (
    <Pane
      width="100vw"
      height="50px"
      display="flex"
      alignItems="center"
      boxSizing="border-box"
      backgroundColor="#2952CC"
    >
      <IconButton onClick={onHomeClick} marginLeft="15px" icon={HomeIcon} />
    </Pane>
  );
}
