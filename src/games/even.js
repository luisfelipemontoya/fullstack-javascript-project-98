import runGame from '../index.js';

const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = Math.floor(Math.random() * 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);

