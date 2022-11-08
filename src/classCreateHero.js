import Character from './classCharacter';

export default class CreateHero extends Character {
  constructor(name, type) {
    super(name, type);
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Magician') {
      this.attack = 10;
      this.defence = 40;
    } else if (type === 'Undead') {
      this.attack = 25;
      this.defence = 25;
    } else if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    } else if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}
