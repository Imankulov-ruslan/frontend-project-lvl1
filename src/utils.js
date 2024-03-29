import readlineSync from 'readline-sync';
import logMessage from './cli.js';

export function welcomeUser() {
  logMessage('Welcome to the Brain Games!');
}

export function askName() {
  return readlineSync.question('May I have your name? ');
}

export function greetUser(name) {
  logMessage(`Hello, ${name}`);
}

export function congratUser(name) {
  logMessage(`Congratulations, ${name}!`);
}

export function getAnswer() {
  return readlineSync.question('Your answer: ');
}
