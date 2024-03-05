import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';
import { calc } from '../src/numbers.js';

const MAX_NUM = 1000;
const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

function generateGameData() {
  const num1 = generateRandomNumber(0, MAX_NUM);
  const num2 = generateRandomNumber(0, MAX_NUM);
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const correctAnswer = String(calc(num1, operator, num2));
  return [`${num1} ${operator} ${num2}`, correctAnswer];
}

export default function brainCalc() {
  gameEngine(rule, generateGameData);
}
