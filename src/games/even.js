import readlineSync from 'readline-sync';

const isEven = (number) => number % 2 === 0;

const runEvenGame = () => {
  console.log('¡Bienvenido a Brain Even!');
  const name = readlineSync.question('¿Cuál es tu nombre? ');
  console.log(`¡Hola, ${name}!`);

  console.log('Responde "yes" si el número es par, de lo contrario responde "no".');

  const number = Math.floor(Math.random() * 100);
  console.log(`Pregunta: ${number}`);

  const answer = readlineSync.question('Tu respuesta: ');
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  if (answer === correctAnswer) {
    console.log('¡Correcto!');
  } else {
    console.log(`'${answer}' es incorrecto ;(. La respuesta correcta era '${correctAnswer}'.`);
    console.log(`¡Intentémoslo de nuevo, ${name}!`);
  }
};

export default runEvenGame;
