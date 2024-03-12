import gameEngine from '../src/index.js';
import { generateRandomNumber, isPrime } from '../src/numbers.js';

const MAX_NUM = 1000;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateGameData() {
  const num = generateRandomNumber(0, MAX_NUM);
  const isNumberPrime = isPrime(num);
  const correctAnswer = isNumberPrime ? 'yes' : 'no';
  return [`${num}`, correctAnswer];
}

export default function runBrainPrime() {
  gameEngine(rule, generateGameData);
}
