export class Timer {
  constructor(DOMContainer) {
    this.DOMContainer = DOMContainer;
    this.isRunning = false;
    this.timerInterval = null;
    this.startTime = null;
    this.render();
  }

  start() {
    if (!this.isRunning) {
      this.startTime = Date.now();
      this.timerInterval = setInterval(() => this.render(), 90);
      this.isRunning = true;
    }
  }

  stop() {
    console.log('stop()');
  }

  reset() {
    if (this.isRunning) {
      this.startTime = null;
      clearInterval(this.timerInterval);
      this.isRunning = false;
      this.render();
    }
  }

  render() {
    if (this.isRunning) {
      const {m, s, cs} = this.calcTime();
      const format = (number) => number.toString().padStart(2, '0');
      this.DOMContainer.innerText = `${format(m)}:${format(s)}:${format(cs)} `;
    } else {
      this.DOMContainer.innerText = '--:--:--';
    }
  }
  
  calcTime() {
    let diff = Math.round((Date.now() - this.startTime) / 10);
    const cs = diff % 100;
    diff = (diff - cs) / 100;
    const s = diff % 60;
    const m = (diff - s) / 60;
    return {
      m: m,
      s: s,
      cs: cs
    };
  }
}
