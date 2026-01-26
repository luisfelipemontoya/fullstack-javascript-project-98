const description = '¿Qué número falta en la progresión?';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};

const generateRound = () => {
  const length = 10;
  const start = getRandomInt(1, 20);
  const step = getRandomInt(2, 10);

  const progression = generateProgression(start, step, length);
  const hiddenIndex = getRandomInt(0, length - 1);
  const correctAnswer = String(progression[hiddenIndex]);

  progression[hiddenIndex] = '..';

  return [progression.join(' '), correctAnswer];
};

export default {
  description,
  generateRound,
};
