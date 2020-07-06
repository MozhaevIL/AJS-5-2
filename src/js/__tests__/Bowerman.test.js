import Bowerman from '../Bowerman';

test('must create bowman when valid parametres are given', () => {
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };
  const recieved = new Bowerman('hero');
  expect(recieved).toEqual(expected);
});
