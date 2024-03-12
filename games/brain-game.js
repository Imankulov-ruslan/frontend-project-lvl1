import { greetUser, welcomeUser, askName } from '../src/utils.js';

export default function runBrainGame() {
  welcomeUser();
  const userName = askName();
  greetUser(userName);
}
