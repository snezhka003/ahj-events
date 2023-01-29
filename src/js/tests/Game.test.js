import Game from '../Game';
/* import src from '../../img/goblin.png' */

const fieldSize = 2;
const src = 'https://github.com/netology-code/ahj-homeworks/blob/video/dom/pic/goblin.png';

test('should return a new object Game', () => {
  const expected = {
    counter: 0,
    img: src,
  };
  const result = new Game(src);
  expect(result).toEqual(expected);
});

test('should return a number less than fieldSize**2 ', () => {
  const action = new Game(src);
  const max = fieldSize ** 2;
  const result = action.getRandom(max);
  expect(result).toBeLessThan(max);
});
