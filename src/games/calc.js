import runGame from '../index.js';

const description = '¿Cuál es el resultado de la expresión?';

const getRandomNumber = () => Math.floor(Math.random() * 10) + 1;

const getRandomOperation = () => {
  const operations = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operations.length);
  return operations[index];
};

const calculate = (a, b, operation) => {
  switch (operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      throw new Error(`Operación desconocida: ${operation}`);
  }
};

const generateRound = () => {
  const a = getRandomNumber();
  const b = getRandomNumber();
  const operation = getRandomOperation();

  const question = `${a} ${operation} ${b}`;
  const correctAnswer = String(calculate(a, b, operation));

  return [question, correctAnswer];
};

export default () => runGame(description, generateRound);

