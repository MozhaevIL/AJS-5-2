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

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    } else {
      throw new Error('Персонаж мертв');
    }
  }

  damage(points) {
    if (this.health === 0) {
      throw new Error('Персонаж уже мертв');
    }
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}
