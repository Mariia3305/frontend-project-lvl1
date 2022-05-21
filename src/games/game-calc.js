import runEngine from '../index.js';
import generateRandomNumber from '../helpers.js';

const rule = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculator = (number1, operator, number2) => {
  switch (operator) {
    case '+': return number1 + number2;
    case '-': return number1 - number2;
    case '*': return number1 * number2;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

const runCheck = () => {
  const number1 = generateRandomNumber(1, 50);
  const number2 = generateRandomNumber(1, 50);
  const randomOperator = operators[generateRandomNumber(0, operators.length)];

  const question = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = String(`${calculator(number1, randomOperator, number2)}`);
  return [question, correctAnswer];
};
const runCalcGame = () => runEngine(rule, runCheck);

export default runCalcGame;
