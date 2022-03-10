let spear = swordsman.secondaryAttack;
let sword = swordsman.basicAttack;
let magic = wizard.basicAttack;

function heroAttack(hero) {
    let heroBackpack = backpackItem(hero.backpack);
    if(heroBackpack === 'sword'){
        return sword;
    }else if(heroBackpack === 'spear'){
        return spear;
    }else{
        return magic;
    }
}
function monsterAttack(monster){
    let attackNumber = Math.floor(Math.random()*100);
    if (attackNumber<=50){
        return monster.basicAttack;
    }else{
        return monster.secondaryAttack;
    }
}
function trueStatemant(x,y){
    if(x<=0){
        console.log('Hero has lost!')
        return false;
    }if(y<=0){
        console.log('Monster is dead!')
        return false;
    }else {
        return true;
    }
}
function fight(hero,monster){
            let monsterHealth = monster.health;
            let heroHealth = hero.health;
        do{
            let attackNumber = Math.floor(Math.random()*100);
            let heroattack = heroAttack(hero);
            let monsterattack = monsterAttack(monster);
            if(attackNumber<=50){
               monsterHealth = monsterHealth - heroattack;
            }else{
                heroHealth = heroHealth - monsterattack;
        }
        console.log(monsterHealth);
        console.log(heroHealth);
    } while(trueStatemant(heroHealth,monsterHealth) ===! false);
        console.log(monsterHealth);
        console.log(heroHealth);
}
fight(wizard,dragon);
