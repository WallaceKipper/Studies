//Função Factory
function Pessoa(){
    return{
        name     : 'Wallace',
        lastname : 'Custódio'
    }
}
const p = Pessoa();
console.log(p);

//Função Singleton
function Pessoal(){
    if(Pessoal.instance){
    Pessoal.instance = this;
 }
return Pessoal.instance;
}
const p1  = Pessoal.call({name : 'Wallace'});
const p2 = Pessoal.call({name : 'Grasielly'});

console.log(p1);
console.log(p2);

//Função Decorator
let loggedin = false;
function calliAuthenticated(fn){
    return !!loggedin && fn();
}
function sum(a, b){
    return a + b;
}

console.log(calliAuthenticated(() => sum(2 ,3)));
loggedin = true;
console.log(calliAuthenticated(() => sum(2 ,3)));
loggedin = false;
console.log(calliAuthenticated(() => sum(2 ,3)));

//Função Obsevable
class Obsevable {
    constructor(){
        this.Obsevable = [];
    }
    subscribe(fn){
        this.Obsevable.push(fn);
    }
    notify(data){
        this.Obsevable.forEach(fn => fn(data));
    }
    unsubscribe(fn){
        this.Obsevable
    }
}