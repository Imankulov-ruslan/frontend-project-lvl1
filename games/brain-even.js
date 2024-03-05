import generateRandomNumber from '../src/numberGenerator.js';
import isEven from '../src/numbers.js';
import gameEngine from '../src/index.js';

const MAX_NUM = 1000;
const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

function generateGameData() {
  const number = generateRandomNumber(0, MAX_NUM);
  const isNumberEven = isEven(number);
  const correctAnswer = isNumberEven ? 'yes' : 'no';
  return [`${number}`, correctAnswer];
}

export default function brainEven() {
  gameEngine(rule, generateGameData);
}
