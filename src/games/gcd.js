const description = 'Encuentra el máximo común divisor de los números dados.';

// Función para generar número aleatorio
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Algoritmo de Euclides para hallar el MCD
const getGcd = (a, b) => {
  let x = a;
  let y = b;

  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }

  return x;
};

const generateRound = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = String(getGcd(num1, num2));

  return [question, correctAnswer];
};

export default {
  description,
  generateRound,
};
