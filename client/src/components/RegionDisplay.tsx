import { Image, Pane, Popover, Text } from "evergreen-ui";
import Region from "../data/Region";

interface IRegionProps {
  region: Region;
}

export default function RegionDisplay(props: IRegionProps) {
  function getRegionImage() {
    return `regions/${props.region
      .toString()
      .toLocaleLowerCase()
      .replaceAll(" ", "-")}.png`;
  }

  return (
    <Pane
      padding="10px"
      display="flex"
      justifyContent="center"
      flexDirection="column"
      height="40px"
      cursor="pointer"
    >
      <Popover
        minWidth="100px"
        content={
          <Pane
            height="40px"
            paddingX="10px"
            alignItems="center"
            display="flex"
            justifyContent="center"
          >
            <Text>{props.region}</Text>
          </Pane>
        }
      >
        <Image src={getRegionImage()} width={75} />
      </Popover>
    </Pane>
  );
}
