const symbol1 = Symbol();
const symbol2= Symbol();

//Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

//Previnir conflito entre nomes de propriedades
const nameSymboll1 = Symbol('name');
const nameSymboll2 = Symbol('name');

const user = {
    [nameSymboll1]: 'Wallace',
    [nameSymboll2]: 'Outro nome',
    lastName: 'Custódio Batista'
}

console.log(user);

/*Symbols criam propriedades que não são emunerables
for (const key in user){
    if (user.hasOwnPropety(key)){
    console.log('\nValor da chave ' + key +': ' + user[key]);        
    }
}

console.log('\nPropriedades do objeto user: ', Object.keys(user));
console.log('\nValores das propriedades do objeto user: ', Object.values(user));*/

//Exibir symbols de um objeto
console.log('\nSymbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('\nTodas as propriedades do objeto user: ', Reflect.ownKeys(user));

//Criando um enum
const directions = {
    UP   : Symbol('UP'),
    DOWN : Symbol('DOWN'),
    LEFT : Symbol('LEFT'),
    RIGHT: Symbol('RIGHT')
}