import readlineSync from 'readline-sync';

export function logMessage(str) {
  console.log(`${str}`);
}

export function welcomeUser() {
  logMessage('Welcome to the Brain Games!');
}

export function askName() {
  return readlineSync.question('May I have your name? ');
}

export function greetUser(name) {
  logMessage(`Hello, ${name}`);
}

export function congratUser(name) {
  logMessage(`Congratulations, ${name}`);
}

export function askQuestion(number) {
  logMessage('Answer "yes" if the number is even, otherwise answer "no".');
  logMessage(`Question: ${number}`);
  return readlineSync.question('Your answer: ');
}
