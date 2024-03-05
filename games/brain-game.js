import readlineSync from 'readline-sync';
import { logMessage } from '../src/cli.js';

export default function brainGame() {
  logMessage('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  logMessage(`Hello, ${userName}!`);
}
