import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);
const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operators.length);
  return operators[index];
};

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const runCalcGame = () => {
  console.log('¡Bienvenido a Brain Games!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);
  console.log('¿Cuál es el resultado de la expresión?');

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
    const a = getRandomNumber();
    const b = getRandomNumber();
    const operator = getRandomOperator();

    console.log(`Pregunta: ${a} ${operator} ${b}`);
    const answer = readlineSync.question('Tu respuesta: ');
    const correctAnswer = String(calculate(a, b, operator));

    if (answer !== correctAnswer) {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${name}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${name}!`);
};

export default runCalcGame;
