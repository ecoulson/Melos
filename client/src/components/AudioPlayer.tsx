import { Pane, Spinner } from "evergreen-ui";
import { useEffect, useState } from "react";
import Audio from "../audio/Audio";
import AudioState from "../audio/AudioState";
import AudioControl from "./AudioControl";
import AudioStatus from "./AudioStatus";

interface IAudioProps {
  audio: Audio | null;
}

export default function AudioPlayer(props: IAudioProps) {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState(AudioState.Paused);

  useEffect(() => {
    function addChangeHandler() {
      if (props.audio) {
        setLoading(false);
        props.audio.onChange(setStatus);
      }
    }

    function stopAudio() {
      if (props.audio) {
        props.audio.stop();
      }
    }

    setLoading(true);
    addChangeHandler();
    return stopAudio;
  }, [props.audio]);

  function renderAudio() {
    if (loading || !props.audio) {
      return <Spinner />;
    }
    return (
      <>
        <AudioStatus status={status} />
        <AudioControl status={status} audio={props.audio} />
      </>
    );
  }

  return (
    <Pane
      elevation={3}
      margin="25px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="space-evenly"
      width="100px"
      height="170px"
    >
      {renderAudio()}
    </Pane>
  );
}
