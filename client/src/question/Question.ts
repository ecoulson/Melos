import Audio from "../audio/Audio";

const IntervalLengthInSeconds = 30;
const TickTime = 1000;

export default class Question {
  private audio: Audio;
  private startTime: number;

  constructor(audio: Audio) {
    this.audio = audio;
    this.startTime = this.getRandomInterval();
  }

  run() {
    this.seekToStartTime();

    const interval: NodeJS.Timeout = setInterval(
      () => this.handleTick(interval),
      TickTime
    );
  }

  private handleTick(interval: NodeJS.Timeout) {
    if (this.shouldStopClip()) {
      this.audio.stop();
      clearInterval(interval);
    }
  }

  private getRandomInterval() {
    return (
      Math.floor(
        Math.random() * (this.audio.duration() / IntervalLengthInSeconds)
      ) * IntervalLengthInSeconds
    );
  }

  private seekToStartTime() {
    this.audio.seek(this.startTime);
  }

  private shouldStopClip() {
    return this.isAtEndOfClip() || this.isInInterval();
  }

  private isAtEndOfClip() {
    return this.audio.currentTime() >= this.audio.duration();
  }

  private isInInterval() {
    return this.audio.currentTime() >= this.startTime + IntervalLengthInSeconds;
  }
}
