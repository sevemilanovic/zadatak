function isTrue(x,y){
    let divText = document.getElementById('divText');
    if(x<=0){
        divText.innerHTML = 'Hero has lost but monster has ' + y +' health';
        return false;
    }if(y<=0){
        divText.innerHTML = 'Monster is dead but hero has ' + x +' health';
        return false;
    }else {
        return true;
    }
}
//requirement for fight/while loop
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
