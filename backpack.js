
let lengthBackpack = 2;
let backpackAllItems = ['sword','spear','magic'];

function numberOfIndex(){
    let number = backpackAllItems.length;
    return(Math.floor((Math.random()*100)% number ));
}; 

function backpackItem() {
    let numberofIndex = numberOfIndex();
    return backpackAllItems[numberofIndex];
}
function ifHero (backpackitem,heroName,backpack){
    if (heroName === 'swordsman' && backpackitem === 'sword') {
        backpack.push(backpackitem);
             console.log(backpackitem);
         } else if (heroName === 'swordsman' && backpackitem === 'spear') {
            backpack.push(backpackitem);
            console.log(backpackitem);
         } else if (heroName === 'wizard' && backpackitem === 'magic') {
            backpack.push(backpackitem);
            console.log(backpackitem);
         } else {
            console.log(backpackitem);
         }

}
function backPack(heroName){
    let backpack = [];
    console.log(backpack);
       while(backpack.length<lengthBackpack){
        let backpackitem = backpackItem();
        ifHero (backpackitem,heroName,backpack); 
}
return backpack;
}






