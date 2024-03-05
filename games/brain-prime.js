import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';
import { isPrime } from '../src/numbers.js';

const MAX_NUM = 1000;
const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function generateGameData() {
  const num = generateRandomNumber(0, MAX_NUM);
  const isNumberEven = isPrime(num);
  const correctAnswer = isNumberEven ? 'yes' : 'no';
  return [`${num}`, correctAnswer];
}

export default function brainPrime() {
  gameEngine(rule, generateGameData);
}
