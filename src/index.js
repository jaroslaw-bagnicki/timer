import './styles/main.scss';
import { Timer } from './scripts/Timer';

// Creating instance of Timer
const stopWatch = new Timer(
  document.querySelector('#timer')
);

// Bind UI & event listeners
const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => stopWatch.start());

const stopButton = document.querySelector('#stop');
stopButton.addEventListener('click', () => stopWatch.stop());

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => stopWatch.reset());
