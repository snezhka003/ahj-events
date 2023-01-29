import Board from '../Board';

const fieldSize = 2;

test('should return a new object Board', () => {
  const expected = {
    fieldSize,
  };
  const result = new Board(fieldSize);

  expect(result).toEqual(expected);
});
