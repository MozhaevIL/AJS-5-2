export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Недопустимая длина имени');
    }

    const typeList = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!(typeList.indexOf(type) === -1)) {
      this.type = type;
    } else {
      throw new Error('Недопустимый тип персонажа');
    }
    this.health = 100;
    this.level = 1;
  }
}
