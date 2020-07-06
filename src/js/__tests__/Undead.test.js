import Undead from '../Undead';

test('must create undead when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const recieved = new Undead('hero');
  expect(recieved).toEqual(expected);
});
