import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const runGame = (game) => {
  const userName = greetUser();
  console.log(game.description);

  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = game.generateRound();

    console.log(`Pregunta: ${question}`);
    const answer = readlineSync.question('Tu respuesta: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' es una respuesta incorrecta ;(. La respuesta correcta era '${correctAnswer}'.`);
      console.log(`¡Intentémoslo de nuevo, ${userName}!`);
      return;
    }

    console.log('¡Correcto!');
  }

  console.log(`¡Felicidades, ${userName}!`);
};

export default runGame;
