export class Timer {
  constructor(DOMTimer, DOMResults) {
    this.DOMTimer = DOMTimer;
    this.DOMResults = DOMResults;
    this.isRunning = false;
    this.startTime = null;
    this.laps = 0;
    this.timerInterval = null;
    this.render();
  }

  nextLap() {
    return this.laps = this.laps + 1;
  }

  start() {
    if (!this.isRunning) {
      this.DOMResults.innerHTML = '';
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => this.render(), 90);
      this.isRunning = true;
    }
  }

  lap() {
    if (this.isRunning) {
      const lapStats = document.createElement('li');
      lapStats.innerText = `Lap ${this.nextLap()}: ${this.template()}`;
      this.DOMResults.appendChild(lapStats);
    }
  }

  stop() {
    if (this.isRunning) {
      this.startTime = null;
      clearInterval(this.timerInterval);
      this.isRunning = false;
      this.laps = 0;
      this.render();
    }
  }

  render() {
    if (this.isRunning) {
      this.DOMTimer.innerText = this.template();
    } else {
      this.DOMTimer.innerText = '--:--:--';
    }
  }

  template() {
    const {m, s, cs} = this.calcTime();
    const format = (number) => number.toString().padStart(2, '0');
    return `${format(m)}:${format(s)}:${format(cs)}`;
  }
  
  calcTime() {
    let diff = Math.round((Date.now() - this.startTime) / 10);
    const cs = diff % 100;
    diff = (diff - cs) / 100;
    const s = diff % 60;
    const m = (diff - s) / 60;
    return {m, s, cs};
  }
}
