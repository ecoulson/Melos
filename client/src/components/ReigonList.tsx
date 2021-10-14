import { Pane } from "evergreen-ui";
import Region from "../data/Region";
import RegionDisplay from "./RegionDisplay";

interface IRegionListProps {
  regions: Region[];
}

export default function RegionList(props: IRegionListProps) {
  return (
    <Pane alignItems="center" display="flex">
      {props.regions.map((region, i) => (
        <RegionDisplay key={i} region={region} />
      ))}
    </Pane>
  );
}
