

let lengthBackpack = 2;
let backpackAllItems = ['sword','spear','magic'];

function numberOfIndex(){
    let number = backpackAllItems.length;
    return(Math.floor((Math.random()*100)% number ));
}; 

function backpackItem() {
    let numberofIndex = numberOfIndex();
    return backpackAllItems[numberofIndex];
}; 

function ifHero (backpackitem,heroName,backpack){
    if (heroName === 'swordsman' && backpackitem === 'sword') {
        backpack.push(backpackitem);
         } else if (heroName === 'swordsman' && backpackitem === 'spear') {
            backpack.push(backpackitem);
         } else if (heroName === 'wizard' && backpackitem === 'magic') {
            backpack.push(backpackitem);
         }else{
            throw `${heroName} can't take ${backpackitem}`;
         }

}
function backPack(heroName){
    let backpack = [];
    
       while(backpack.length<lengthBackpack){
        let backpackitem = backpackItem();
        try{
            ifHero(backpackitem,heroName,backpack);
        }catch(e){
            alert(e);
        }
            
}
return backpack;
}










