let lengthBackpack = 2;
let backpackAllItems = ['sword','spear','magic'];

function randomNumber(){
    return Math.floor(Math.random()*100);
}
//gives random number
function numberOfIndex(x){
    let number = x.length;
    return (randomNumber() % number) ;
}; 
//random number of array index

function backpackItem(y) {
    let numberofIndex = numberOfIndex(y);
    return y[numberofIndex];
}; 
//random item in array

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
         }else{
            throw `${heroName} can't take ${backpackitem}`;
         }

}
//exceptions of items and heroes
function backPack(heroName){
    let backpack = [];
    
       while(backpack.length<lengthBackpack){
        let backpackitem = backpackItem(backpackAllItems);
        try{
            ifHero(backpackitem,heroName,backpack);
        }catch(e){
            alert(e);
        }
            
}
return backpack;
}
//making backpack full





















