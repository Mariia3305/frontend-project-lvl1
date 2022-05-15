import engineOfGame from '../index.js';
import generateRandomNumber from '../generateRandomNumber.js';

const gameRules = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calc = (number1, operator, number2) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: return null;
  }
};

const gameCheck = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);
  const randomOperator = operators[generateRandomNumber(0, 2)];
  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = `${calc(number1, randomOperator, number2)}`;
  return [question, correctAnswer];
};
const calcGame = () => engineOfGame(gameRules, gameCheck);

export default calcGame;
