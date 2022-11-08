const listOfType = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
  constructor(name, type) {
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      // console.log('Bad')
      throw new Error('Bad name');
    }

    if (listOfType.includes(type)) {
      this.type = type;
    } else {
      // this.type = 'bad type'
      throw new Error('bad Type');
    }
    this.health = 100;
    this.level = 1;
    this.attack = 1;
    this.defence = 1;
  }

  levelUp() {
    this.level += 1;
    this.attack += (this.attack * 20) / 100;
    this.defence += (this.defence * 20) / 100;
    if (this.health !== 0) {
      this.health = 100;
    } else {
      throw new Error('нельзя повысить LEVEL умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    // } else {
    //   return "you are dead"
    // }
  }
}
