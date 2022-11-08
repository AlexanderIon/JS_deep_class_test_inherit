import CreateHero from '../classCreateHero';
import Character from '../classCharacter';

// test ('check',()=>{
//     const res = 45;
//     expect(res).toBe(45)

// })
const listData = [
  ['Bowman', 25, 25],
  ['Swordsman', 40, 10],
  ['Magician', 10, 40],
  ['Undead', 25, 25],
  ['Zombie', 40, 10],
  ['Daemon', 10, 40],

];
const handler = test.each(listData);
handler('check %s', (type, attack) => {
  const res = new CreateHero('testName', type);

  expect(res.attack).toBe(attack);
});
test('check damage', () => {
  const resForTest = new Character('Name1', 'Zombie');
  resForTest.damage(50);
  expect(resForTest.health).toBeCloseTo(50.5);
});
test('check levelUp', () => {
  const res = new Character('Name1', 'Bowman');
  res.levelUp();
  expect(res.level).toBe(2);
});
test('check Error bad type', () => {
  // const res = new Character('Name1','Bowm')
  expect(() => new Character('Name1', 'Bowm')).toThrow();
});

test('check Error bad name', () => {
  expect(() => new Character('N', 'Bowman')).toThrow(new Error('Bad name'));
});

test('check Error levelUP where healgh = 0', () => {
  const res = new Character('Name1', 'Bowman');
  res.health = 0;
  expect(() => res.levelUp()).toThrow();
});

// test('ТЕСТ НЕ ПРОХОДИТ ПОЧЕМУ', () => {
//   const res = new Character('Name1', 'Bowm');
//   expect(res).toThrow(new Error('bad Type'));
// });
