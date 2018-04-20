#! /usr/bin/env node
import brainCalc from '../games/calc-game';
import { userWelcome } from '..';

console.log('Answer "yes" if number even otherwise answer "no".');

userWelcome();

brainCalc();
