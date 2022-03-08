class Monster{
    constructor(name,basicAttack,secondaryAttack,health){
        this.name = name;
        this.basicAttack= basicAttack,
        this.secondaryAttack = secondaryAttack,
        this.health = health
    }
    attack(){
   
        let randomNumber = Math.floor(Math.random()*10);
        console.log(randomNumber);
         if (randomNumber<= 5 ){
                return this.basicAttack;
             
            }
         if ( randomNumber > 5){
                return this.secondaryAttack;
             }
            }

}

class Hero extends Monster{
    constructor(name,basicAttack,secondaryAttack,health,backpack){
        super(name,basicAttack,secondaryAttack,health);
        this.backpack = backpack;
        
    }
}
let randomNumber = Math.floor(Math.random()*10);
let wizard = new Hero('wizard',20,0,150,backPack('wizard'));
let swordsman = new Hero('swordsman', 10,15,100,backPack('swordsman'));
let dragon = new Monster('dragon',5,20,200);
let spider = new Monster('spider', 5,8,200);
console.log(wizard);
console.log(swordsman);
console.log(dragon);
console.log(spider);






 










 
 
 





