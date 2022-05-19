import runEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const rule = 'Find the greatest common divisor of given numbers';

const gcd = (randomNum1, randomNum2) => {
  if (!randomNum2) {
    return randomNum1;
  }
  return gcd(randomNum2, randomNum1 % randomNum2);
};

const runCheck = () => {
  const number1 = generateRandomNumber(1, 25);
  const number2 = generateRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;
  return [question, correctAnswer];
};
const runGcdGame = () => runEngine(rule, runCheck);

export default runGcdGame;
