#!/usr/bin/env node
import { askName, welcomeUser, greetUser } from '../src/cli.js';

welcomeUser();

const userName = askName();
greetUser(userName);
