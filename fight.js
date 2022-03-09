function heroAttack(hero) {
    let heroBackpack = hero.backpack;
    console.log(heroBackpack);
    return;
}
function fight(hero,monster){
    let attackNumber = Math.floor(Math.random()*100);
    let heroattack = heroAttack(hero);
    console.log(attackNumber);
    if(attackNumber<=50){
        console.log(heroattack);
    }else{
        console.log(monster);
    }
}
fight(swordsman,spider);