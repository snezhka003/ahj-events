import Character from '../Character';

test('создание персонажа', () => {
  const goblin = new Character();
  const received = { character: 'active', position: -1 };
  expect(received).toEqual(goblin);
});
