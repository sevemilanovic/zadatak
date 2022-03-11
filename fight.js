function isTrue(x,y){
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
            let attackNumber = randomNumber();
            let heroattack = hero.heroAttack();
            let monsterattack = monster.attack();
            if(attackNumber<=50){
               monsterHealth = monsterHealth - heroattack;
            }else{
                heroHealth = heroHealth - monsterattack;
        }
        console.log(monsterHealth);
        console.log(heroHealth);
    } while(isTrue(heroHealth,monsterHealth) ===! false);
       
}
fight(hero,monster);
