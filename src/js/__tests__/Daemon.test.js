import Daemon from '../Daemon';

test('must create daemon when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };
  const recieved = new Daemon('hero');
  expect(recieved).toEqual(expected);
});
