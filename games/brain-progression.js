import generateRandomNumber from '../src/numberGenerator.js';
import gameEngine from '../src/index.js';

const rule = 'What number is missing in the progression?';
const maxStart = 100;
const maxStep = 100;

function createProgression(start, step, length) {
  const res = [];
  for (let i = 0; i <= length; i += 1) {
    const result = start + (i * step);
    res.push(result);
  }
  return res;
}

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
