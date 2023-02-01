import Game from '../Game';
import imgSrc from '../../img/goblin.png';

const fieldSize = 2;

test('should return a new object Game', () => {
  const expected = {
    counter: 0,
    img: imgSrc,
  };
  const result = new Game(imgSrc);
  expect(result).toEqual(expected);
});

test('should return a number less than fieldSize**2 ', () => {
  const game = new Game(imgSrc);
  const max = fieldSize ** 2;
  const result = game.getRandom(max);
  expect(result).toBeLessThan(max);
});
