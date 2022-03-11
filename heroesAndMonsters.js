let wizardName=('wizard');
let swordsmanName = ('swordsman');
let wizard = new Hero(wizardName,20,0,150,backPack(wizardName));
let swordsman = new Hero(swordsmanName, 10,15,100,backPack(swordsmanName));
let dragon = new Monster('dragon',5,20,200);
let spider = new Monster('spider', 5,8,200);

let heroes = [wizard,swordsman];
let monsters = [dragon,spider];
let hero = backpackItem(heroes);
let monster = backpackItem(monsters);
console.log(hero);
console.log(monster);