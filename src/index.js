import logMessage from './cli.js';
import {
  askName, getAnswer, greetUser, welcomeUser, congratUser,
} from './utils.js';

const gameRounds = 3;
let correctAnswersCount = 0;

const gameEngine = (rule, generateGameData) => {
  welcomeUser();
  const userName = askName();
  greetUser(userName);
  logMessage(rule);

  while (correctAnswersCount < gameRounds) {
    const [question, correctAnswer] = generateGameData();
    logMessage(`Question: ${question}`);
    const userAnswer = getAnswer();

    if (correctAnswer === userAnswer) {
      logMessage('Correct!');
      correctAnswersCount += 1;
    } else {
      logMessage(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
      return;
    }
  }
  congratUser(userName);
};

export default gameEngine;
