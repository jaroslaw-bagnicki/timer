export class Timer {
  constructor(UI) {
    this.UItimer = UI.timer;
    this.UIresults = UI.results;
    this.UIstartButton = UI.startButton;
    this.UIlapButton = UI.lapButton;
    this.UIstopButton = UI.stopButton;
    this.UIclearButton = UI.clearButton;

    this.UIstartButton.addEventListener('click', () => this.start());
    this.UIlapButton.addEventListener('click', () => this.lap());
    this.UIstopButton.addEventListener('click', () => this.stop());
    this.UIclearButton.addEventListener('click', () => this.clearResults());

    this.isRunning = false;
    this.startTime = null;
    this.stoppedTimerLabel = null;
    this.laps = 0;
    this.timerInterval = null;
    this.render();
    this.toggleUI();
  }

  nextLap() {
    return this.laps = this.laps + 1;
  }

  start() {
    if (!this.isRunning) {
      this.clearResults();
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => this.render(), 90);
      this.isRunning = true;
      this.toggleUI();
    }
  }

  lap() {
    if (this.isRunning) {
      const lapStats = document.createElement('li');
      lapStats.innerText = `Lap ${this.nextLap()}: ${this.template()}`;
      this.UIresults.appendChild(lapStats);
      this.UIclearButton.disabled = false;
    }
  }

  stop() {
    if (this.isRunning) {
      this.stoppedTimerLabel = this.template();
      console.log(this.stoppedTimerLabel);
      this.startTime = null;
      clearInterval(this.timerInterval);
      this.isRunning = false;
      this.laps = 0;
      this.render();
      this.toggleUI();
    }
  }

  render() {
    if (this.isRunning) {
      this.UItimer.innerText = this.template();
    } else {
      this.UItimer.innerText = this.stoppedTimerLabel || '--:--:--';
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

  clearResults() {
    this.UIresults.innerHTML = '';
    this.UItimer.innerText = '--:--:--';
    this.stoppedTimerLabel = null;
    this.UIclearButton.disabled = true;
  }

  toggleUI() {
    const flag = this.isRunning;
    this.UIstartButton.disabled = flag;
    this.UIlapButton.disabled = !flag;
    this.UIstopButton.disabled = !flag;
    this.UIclearButton.disabled = this.isResultsEmpty;
  }

  get isResultsEmpty() {
    return ((this.UIresults.innerHTML === '') && (this.stoppedTimerLabel === null)) ? true : false;
  }
}
