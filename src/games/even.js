const description = 'Responde "yes" si el número es par, de lo contrario responde "no".';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return [String(number), correctAnswer];
};

export default {
  description,
  generateRound,
};
