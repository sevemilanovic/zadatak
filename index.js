let heroji = ["carobnjak", "macevalac"];
let cudovista = ["zmaj","pauk"];
let carobnjak = {};
let macevalac ={};
let zmaj = {};
let pauk = {};
const ranac = 2;
const ranacSadrzaj = ["carolija", "mac", "koplje"];

class Cudoviste{
    constructor(name,osnovniNapad,drugiNapad,health){
        this.name = name;
        this.osnovniNapad= osnovniNapad,
        this.drugiNapad = drugiNapad,
        this.health = health
    }
    attackCudoviste(){
   
        let broj = Math.floor(Math.random()*10);
        console.log(broj);
         if (broj<= 5 ){
                return this.osnovniNapad;
             
            }
         if ( broj > 5){
                return this.drugiNapad;
             }
            }

}

class Heroj extends Cudoviste{
    constructor(name,osnovniNapad,drugiNapad,treciNapad,health){
        super(name,osnovniNapad,drugiNapad,health);
        this.treciNapad = treciNapad
        
    }

    attackHeroj(){
   
        let broj = Math.floor(Math.random()*10);
        console.log(broj);
         if (broj<= 3 ){
                return this.osnovniNapad;
             
            }
         if ( broj > 3 && broj<7){
                return this.drugiNapad;
            }
            
          if(broj >=  7) {
                return this.treciNapad;
            }
         }
}

let cudoviste = cudovista.map((x)=> {
    if (x === 'zmaj') {
        return zmaj = new Cudoviste("zmaj",5,20,200);
    }
    else{
       return pauk = new Cudoviste("pauk",5,8,150);
    }
});

let heroj = heroji.map((x)=> {
    if (x === 'carobnjak') {
        return carobnjak = new Heroj("carobnjak",20,0,150,0);
    }
    else{
      return macevalac = new Heroj("macevalac",0,10,100,15);
    }
});
 
function borba(x,y){
    let a = Cudoviste.attackCudoviste();
    let b =  Heroj.attackHeroj();
    let 
  if(x){
    return a;
}else{
  return b  ;
}
}


borba(pauk,macevalac);






 
 
 





