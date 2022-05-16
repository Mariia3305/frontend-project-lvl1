import engineOfGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const gameRules = 'What number is missing in the progression?';

const getProgression = (number, step, lengthArr) => {
  const numbers = [];
  for (let i = 0; i <= lengthArr; i += 1) {
    const result = number + (step * i);
    numbers.push(result);
  }
  return numbers;
};

const gameCheck = () => {
  const firstNumber = generateRandomNumber(1, 20);
  const stepNumber = generateRandomNumber(1, 9);
  const progressionLength = generateRandomNumber(5, 10);

  const progression = getProgression(firstNumber, stepNumber, progressionLength);
  const findNumber = generateRandomNumber(0, progression.length - 1);

  const correctAnswer = `${progression[findNumber]}`;
  progression[findNumber] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};
const progressionGame = () => engineOfGame(gameRules, gameCheck);

export default progressionGame;
