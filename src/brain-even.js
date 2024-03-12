import {
  congratUser, welcomeUser, greetUser, askName, getAnswer,
} from './utils.js';
import logMessage from './cli.js';
import { isEven, generateRandomNumber } from './numbers.js';

const MAX_NUM = 1000;
let correctAnswersCount = 0;

export default function startBrainEven() {
  welcomeUser();

  const userName = askName();
  greetUser(userName);

  while (correctAnswersCount !== 3) {
    const number = generateRandomNumber(0, MAX_NUM);
    const isNumberEven = isEven(number);
    const answer = getAnswer(number);
    const correctAnswer = isNumberEven ? 'yes' : 'no';
    if (answer === correctAnswer) {
      correctAnswersCount += 1;
    } else {
      logMessage(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      correctAnswersCount = 0;
    }
  }
  congratUser(userName);
}
