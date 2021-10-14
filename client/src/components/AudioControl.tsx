import { IconButton, Pane, PauseIcon, PlayIcon, StopIcon } from "evergreen-ui";
import Audio from "../audio/Audio";
import AudioState from "../audio/AudioState";

interface IAudioControl {
  audio: Audio;
  status: AudioState;
}

const IconLookup = {
  Playing: PauseIcon,
  Paused: PlayIcon,
  Stopped: StopIcon,
};

export default function AudioControl(props: IAudioControl) {
  return (
    <Pane margin="10px">
      <IconButton
        width="50px"
        height="50px"
        disabled={props.status === AudioState.Stopped}
        icon={IconLookup[props.status]}
        onClick={() => props.audio.toggle()}
      />
    </Pane>
  );
}
