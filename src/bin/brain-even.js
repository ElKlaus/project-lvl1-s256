#! /usr/bin/env node
import brainEven from '../games/even-game';
import { userWelcome } from '..';


console.log('Answer "yes" if number even otherwise answer "no".');

userWelcome();

brainEven();
