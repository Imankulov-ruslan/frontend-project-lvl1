import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';

const MAX_NUM = 1000;
const rule = "What is the result of the expression?"
const operators = ['+', '-', '*']

function calc(num1, operator, num2) {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return;
  }

}

function generateGameData() {
  const num1 = generateRandomNumber(MAX_NUM);
  const num2 = generateRandomNumber(MAX_NUM);
  const operator = operators[Math.floor(Math.random() * operators.length)]
  const correctAnswer = String(calc(num1, operator, num2))
  return [`${num1} ${operator} ${num2}`, correctAnswer]
}

export default function brainCalc() {
  gameEngine(rule, generateGameData);
} 
  