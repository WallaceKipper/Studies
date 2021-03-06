function fn() {
    return 'Code Here';
}

const arrowFn  = () => 'Code Here';
const arrowFn2 = () => {
    //Mais de uma expressão 
    return 'Code Hero';
}

//Funções tambem são objetos
fn.prop = 'Posso criar propriedades';

console.log(fn());
console.log(fn.prop);

//Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam);

logFnResult(fn);

/*Receber e retornar funçes
const controlFnExec => fnParam => allowed =>{
    if (allowed) {
        fnParam();
    }
}*/

const handleFnExecution = controlFnExec(fn);

handleFnExecution(true); // Executará a função fn
handleFnExecution(); //Não executará a função fn

// controlFnExec como função
function controlFnExec(fnParam) {
    return function (allowed) {
        if (allowed) {
            fnParam();
        }
    }
}

this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn, getName
}

console.log(user.getNameArrowFn());
console.log(user.getName());