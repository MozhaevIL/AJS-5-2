import Swordsman from '../Swordsman';

test('must create swordsman when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const recieved = new Swordsman('hero');
  expect(recieved).toEqual(expected);
});
