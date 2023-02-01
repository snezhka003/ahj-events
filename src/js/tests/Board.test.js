/**
 * @jest-environment jsdom
 */

import Board from '../Board';

const fieldSize = 2;

test('should return a new object Board', () => {
  const expected = {
    fieldSize,
  };
  const result = new Board(fieldSize);
  expect(result).toEqual(expected);
});

test('should create new section', () => {
  // Создаем экземпляр класса
  const field = new Board(fieldSize);
  document.body.innerHTML = '<section class="game_field"><div class="field_container" id="fieldGame"></div></section>';
  const expected = document.querySelector('body .game_field');
  field.createSection();
  const result = document.querySelector('.game_field');
  expect(result).toEqual(expected);
});

test('should return img', () => {
  // Создаем экземпляр поля
  const field = new Board(fieldSize);
  document.body.innerHTML = '<div class="field_container" id="fieldGame"><div class="cell" data-cell="0"></div><div class="cell" data-cell="1"></div><div class="cell" data-cell="2"></div><div class="cell" data-cell="3"></div></div>';
  const expected = document.querySelector('body #fieldGame');
  field.createSection();
  const result = field.generateField(fieldSize);
  expect(result).toEqual(expected);
});
