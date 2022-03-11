class Monster{
    constructor(name,basicAttack,secondaryAttack,health){
        this.name = name;
        this.basicAttack= basicAttack,
        this.secondaryAttack = secondaryAttack,
        this.health = health
    }
    attack(){
    
        let randomnumber = randomNumber();
        console.log(randomnumber);
         if (randomnumber<= 50 ){
                return this.basicAttack;
             
            }
         if ( randomnumber > 50){
                return this.secondaryAttack;
             }
            }

}

class Hero extends Monster{
    constructor(name,basicAttack,secondaryAttack,health,backpack){
        super(name,basicAttack,secondaryAttack,health);
        this.backpack = backpack;
        
    }
    heroAttack() {
        let heroBackpack = backpackItem(this.backpack);
        if(heroBackpack === 'sword'){
            return this.basicAttack;
        }else if(heroBackpack === 'spear'){
            return this.secondaryAttack;
        }else{
            return this.basicAttack;
        }
    }
}




 










 
 
 





