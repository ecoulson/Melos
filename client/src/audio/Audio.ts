import { Howl } from "howler";
import IFile from "../data/IFile";
import AudioState from "./AudioState";

type ChangeListener = (status: AudioState) => void;
type LoadListener = () => void;

export default class Audio {
  private audio: Howl;
  private changeListeners: ChangeListener[];
  private loadListeners: LoadListener[];

  constructor(file: IFile) {
    this.audio = new Howl({
      src: file.path,
      onload: () => {
        this.emitLoad();
        this.emitChange(AudioState.Paused);
      },
      onend: () => this.emitChange(AudioState.Stopped),
    });
    this.changeListeners = [];
    this.loadListeners = [];
  }

  duration() {
    return this.audio.duration();
  }

  currentTime() {
    return this.audio.seek();
  }

  seek(time: number) {
    this.audio.seek(time);
  }

  stop() {
    this.audio.stop();
    this.emitChange(AudioState.Stopped);
  }

  toggle() {
    if (this.audio.playing()) {
      this.audio.pause();
      this.emitChange(AudioState.Paused);
    } else {
      this.audio.play();
      this.emitChange(AudioState.Playing);
    }
  }

  private emitChange(state: AudioState) {
    this.changeListeners.forEach((listener) => listener(state));
  }

  private emitLoad() {
    this.loadListeners.forEach((listener) => listener());
  }

  onChange(listener: ChangeListener) {
    this.changeListeners.push(listener);
  }

  onLoad(listener: LoadListener) {
    this.loadListeners.push(listener);
  }
}
