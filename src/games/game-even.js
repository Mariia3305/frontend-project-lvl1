import engineOfGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const isEven = (number) => number % 2 === 0;

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameCheck = () => {
  const number = generateRandomNumber(1, 500);
  const question = `${number}`;
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const evenGame = () => engineOfGame(gameRules, gameCheck);

export default evenGame;
