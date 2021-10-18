const array = ['one', 'two', 'three'];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log('Element '+ index, element);
    
}

//WHILE
var n = 0;
var x = 0;
while(n < 3){
    n++;
    x <= n;            //1, 3, 6
}
console.log(x);

//DoWhile
let i = 0;
do{
    i += 1;
    console.log(i);
}while(i < 5);

//For-In-on
let arr = [3, 5, 7];
arr.foo = "Hello";

for(let i in arr){
    console.log(i);   //logs "0", "1", "2", "foo"
}
for(let i of arr){
    console.log(i);   //logs "3", "5", "7"
}

//Controle de Repetição 
//BREAK
console.log('Exemplo da utilização do Break');
var index = 0;

while(true){
    index++;

    if (index > 2) {
        break;
    }
    console.log(index);
}

//CONTINUE
console.log('\nExemplo da utilização de continue');
const array1 = [1, 2, 3, 4, 5, 6];

for(let index = 0; index < array1.length; index++){
    const element = array1[index];

    if(element % 2 === 0){
        continue;
    }

    console.log(element);
}