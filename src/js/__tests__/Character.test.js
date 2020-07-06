import Character from '../Character';

test('must create character when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Swordsman',
    health: 100,
    level: 1,
  };
  const recieved = new Character('hero', 'Swordsman');
  expect(recieved).toEqual(expected);
});

test('must throw an error when invalid name is given', () => {
  expect(() => {
    const errName = new Character('h', 'Sworsman');
    errName();
  }).toThrow('Недопустимая длина имени');
});

test('must throw an error when invalid type is given', () => {
  expect(() => {
    const errName = new Character('hero', 'Sworspan');
    errName();
  }).toThrow('Недопустимый тип персонажа');
});
