import './styles/main.scss';
import { Timer } from './scripts/Timer';

// Creating instance of Timer
const stopWatch = new Timer(
  document.querySelector('#timer'),
  document.querySelector('#results')
);

// Bind UI & event listeners
const startButton = document.querySelector('#start');
startButton.addEventListener('click', () => stopWatch.start());

const stopButton = document.querySelector('#lap');
stopButton.addEventListener('click', () => stopWatch.lap());

const resetButton = document.querySelector('#stop');
resetButton.addEventListener('click', () => stopWatch.stop());
