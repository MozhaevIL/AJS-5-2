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

test('must commit levelUp method correctly', () => {
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 100,
    level: 2,
    attack: 30,
    defence: 30,
  };

  const recieved = new Character('hero', 'Bowman');
  recieved.health = 10;
  recieved.attack = 25;
  recieved.defence = 25;
  recieved.levelUp();

  expect(recieved).toEqual(expected);
});

test('must throw error on leveling up dead character', () => {
  expect(() => {
    const deadBowman = new Character('hero', 'Bowman');
    deadBowman.health = 0;
    deadBowman.levelUp();
  }).toThrow('Персонаж мертв');
});

test('must calculate taken damage correctly if character is alive', () => {
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 85,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const recieved = new Character('hero', 'Bowman');
  recieved.health = 100;
  recieved.attack = 25;
  recieved.defence = 25;
  recieved.damage(20);

  expect(recieved).toEqual(expected);
});

test('must calculate taken damage correctly if character is dying', () => {
  const expected = {
    name: 'hero',
    type: 'Bowman',
    health: 0,
    level: 1,
    attack: 25,
    defence: 25,
  };

  const recieved = new Character('hero', 'Bowman');
  recieved.health = 1;
  recieved.attack = 25;
  recieved.defence = 25;
  recieved.damage(20);

  expect(recieved).toEqual(expected);
});

test('must throw an error on damage to dead character', () => {
  expect(() => {
    const deadBowman = new Character('hero', 'Bowman');
    deadBowman.health = 0;
    deadBowman.defence = 25;
    deadBowman.damage(10);
  }).toThrow('Персонаж уже мертв');
});
