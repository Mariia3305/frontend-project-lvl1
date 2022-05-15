import engineOfGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const gameRules = 'Find the greatest common divisor of given numbers';

const gcd = (randomNum1, randomNum2) => {
  if (!randomNum2) {
    return randomNum1;
  }
  return gcd(randomNum2, randomNum1 % randomNum2);
};

const gameCheck = () => {
  const number1 = generateRandomNumber(1, 25);
  const number2 = generateRandomNumber(1, 10);
  const question = `${number1} ${number2}`;
  const correctAnswer = `${gcd(number1, number2)}`;
  return [question, correctAnswer];
};
const gcdGame = () => engineOfGame(gameRules, gameCheck);

export default gcdGame;
