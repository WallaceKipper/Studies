'use strict';

const myText = 'Hello prototype!';

myText.split('');  // <- de onde vem esse "split"?


'use strict';
const myText1 = String('Hello Prototype!');

console.log(myText1.__proto__.split);  // f split () { [native code]}
console.log(myText1.__proto__.split === String.prototype.split);  // true]}

function Animal() {
    this.qtdePatas = 4;
}
 const cachorro = new Animal();

 console.log(cachorro.qtdePatas);

 /*function Animala(qtdePatas) {
     this.qtdePatas = qtdePatas;
     this.movimentar = function () {}
 }*/
 function Animala() {
    Animala.prototype.qtdePatas = 0
    Animala.prototype.movimentar = function () {}
}

/*function Cachorro(morde) {
     Animala.call(this, 4);
     this.morde = morde;
     this.latir = function(){
         console.log('Au!, Au!');
     }
 }*/
 function Cachorro(morde){
     this.qtdePatas = 4;
     this.morde = morde;
 }
 Cachorro.prototype = Object.create(Animala);
 Cachorro.prototype.latir = function(){
    console.log('Au!, Au!');
 }
 const pug = new Cachorro(false);
 const pitbull = new Cachorro(true);

 console.log(pitbull);

 function Pessoa(name) {
     this.name = name;
 }
 const p = new Pessoa('Wallace');

 console.log(p);

 //Agora usando Classe
 'use strict';

 class Anima{
     constructor(qtdePata){
         this.qtdePata = 4;
     }
 }
 class Cachorra extends Anima {
     constructor(morde){
         super(4);
         this.morde = 4;
     }
 }
 const poodle = new Cachorra(false);
 console.log(poodle);