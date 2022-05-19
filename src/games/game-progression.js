import runEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const rule = 'What number is missing in the progression?';

const getProgression = (number, step, ArrayLength) => {
  const numbers = [];
  for (let i = 0; i <= ArrayLength; i += 1) {
    const result = number + (step * i);
    numbers.push(result);
  }
  return numbers;
};

const runCheck = () => {
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
const runProgressionGame = () => runEngine(rule, runCheck);

export default runProgressionGame;
