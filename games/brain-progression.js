import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';
import { createProgression } from '../src/numbers.js';

const rule = 'What number is missing in the progression?';
const maxStart = 100;
const maxStep = 100;

function generateGameData() {
  const start = generateRandomNumber(0, maxStart);
  const step = generateRandomNumber(0, maxStep);
  const length = generateRandomNumber(5, 10);

  const progression = createProgression(start, step, length);
  const randomIndex = generateRandomNumber(0, progression.length - 1);

  const correctAnswer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';

  return [`${progression.join(' ')}`, correctAnswer];
}

export default function brainProgression() {
  gameEngine(rule, generateGameData);
}
