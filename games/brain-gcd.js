import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';
import { findGcd } from '../src/numbers.js';

const MAX_NUM = 1000;
const rule = 'Find the greatest common divisor of given numbers.';

function generateGameData() {
  const num1 = generateRandomNumber(0, MAX_NUM);
  const num2 = generateRandomNumber(0, MAX_NUM);
  const correctAnswer = String(findGcd(num1, num2));
  return [`${num1} ${num2}`, correctAnswer];
}

export default function brainGcd() {
  gameEngine(rule, generateGameData);
}
