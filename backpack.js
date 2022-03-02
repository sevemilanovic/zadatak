
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
function backPack(){
    let backpack =[];
    console.log(backpack);
       while(backpack.length<lengthBackpack){
        let backpackitem = backpackItem(); 
           backpack.push(backpackitem);
           console.log(backpackitem);
}
return backpack;
}






