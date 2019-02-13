import './styles/main.scss';
import { Timer } from './scripts/Timer';

// Bind UI
const timer = document.querySelector('#timer');
const startButton = document.querySelector('#start');
const lapButton = document.querySelector('#lap');
const stopButton = document.querySelector('#stop');
const clearButton = document.querySelector('#clear');
const results = document.querySelector('#results');

// Creating instance of Timer
const stopWatch = new Timer({
  timer, 
  results, 
  startButton, 
  lapButton, 
  stopButton, 
  clearButton
});
