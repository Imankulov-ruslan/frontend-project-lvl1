import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';

const MAX_NUM = 1000;
const rule = 'Find the greatest common divisor of given numbers.';

function findGcd(num1, num2) {
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) num1 %= num2;
    else num2 %= num1;
  }
  return num1 + num2;
}

function generateGameData() {
  const num1 = generateRandomNumber(0, MAX_NUM);
  const num2 = generateRandomNumber(0, MAX_NUM);
  const correctAnswer = String(findGcd(num1, num2));
  return [`${num1} ${num2}`, correctAnswer];
}

export default function brainGcd() {
  gameEngine(rule, generateGameData);
}
