import Zombie from '../Zombie';

test('must create zombie when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };
  const recieved = new Zombie('hero');
  expect(recieved).toEqual(expected);
});
