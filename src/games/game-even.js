import runEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const isEven = (number) => number % 2 === 0;

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const runCheck = () => {
  const number = generateRandomNumber(1, 500);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const runEvenGame = () => runEngine(rule, runCheck);

export default runEvenGame;
