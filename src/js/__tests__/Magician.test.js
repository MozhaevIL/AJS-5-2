import Magician from '../Magician';

test('must create magician when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const recieved = new Magician('hero');
  expect(recieved).toEqual(expected);
});
