import {
  Card,
  Icon,
  Pane,
  StatusIndicator,
  VolumeOffIcon,
  VolumeUpIcon,
} from "evergreen-ui";
import AudioState from "../audio/AudioState";

interface IAudioStatusProps {
  status: AudioState;
}

const StatusIndicatorLookup = {
  Playing: "success",
  Paused: "warning",
  Stopped: "danger",
};

const IconLookup = {
  Playing: VolumeUpIcon,
  Paused: VolumeOffIcon,
  Stopped: VolumeOffIcon,
};

export default function AudioStatus(props: IAudioStatusProps) {
  return (
    <Pane display="flex" justifyContent="center" width="100%">
      <Card
        display="flex"
        justifyContent="space-evenly"
        alignItems="center"
        flexDirection="column"
        width={100}
        height={100}
      >
        <Icon size={50} icon={IconLookup[props.status]} />
        <StatusIndicator color={StatusIndicatorLookup[props.status]}>
          {props.status}
        </StatusIndicator>
      </Card>
    </Pane>
  );
}
