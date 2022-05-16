import engineOfGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCheck = () => {
  const number = generateRandomNumber(1, 100);
  const question = `${number}`;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const primeGame = () => engineOfGame(gameRules, gameCheck);

export default primeGame;
