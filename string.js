//Retorna o Tamanho de uma String
const textSize = 'Texto'.length;
console.log('Quantidade de letras: ' + textSize);

//Retorna um array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo delimitador: ', splittedText);

//Busca por um valor e substitui por outro
const replacedText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de Valor: ', replacedText);

//Retorna a "Fatia" de um valor
const lastChar = 'Texto'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithouLastChar = 'Texto'.slice(0,-1);
console.log('\nValor da string da primeira letra menos a última: ',allWithouLastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da String da segunda letra até a última: ',secondToEnd);

//Retorna N caracters a partir de uma posição
const twoCharsBeforeFistPos = 'Texto'.substr(0,2);
console.log('\nAs duas letras primeiras são: ',twoCharsBeforeFistPos);

//Trabalhando com Números
const myNumber = 12.4032;

//Transformar número para String
const numberAsString = myNumber.toString();
console.log('\nNúmero trasformado em String: ', typeof numberAsString);

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

//Transforma uma String em Float
console.log('\nString parseada para float: ', parseFloat('13.22'));

//Trasforma em uma string em int
console.log('\nString parseada para int: ', parseInt('13.20'));

//Trabalhando com Objetos 
let user = {
    name: 'Guilherme'
}
//console.log('\n', user);
//Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
//console.log(user);

user['name'] = 'Outro nome 2';
//console.log(user);


const prop = 'name';
user[prop] = 'Outro nome 3';
//console.log(user);

//Criando uma Propriedade
user.lastName = 'Cabrini da Silva';
//console.log(user);

//Deletando uma Propriedade
delete user.name;
console.log(user);

//Mais Exemplos de Objetos
const user2 = {
    name: 'Wallace',
    lastName: 'Custodio Batista'
}

//Recupera as chaves do objeto
console.log('\nPropriedades do objeto user: ', Object.keys(user2));

//Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user: ', Object.values(user2));

//Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de Propriedades e valores: ', Object.entries(user2));

//Margear propriedades de objetos
Object.assign(user2, {fullName: 'Wallace Custodio Batista'});

console.log('\nAdiciona a propriedade fullName no objeto user ', user2);
console.log('\nretorna um novo objeto margeando dois ou mais objetos ', Object.assign({}, user2, {age:28}));

//Previne todas as alterações em um objeto
const newObj = {foo: 'bar'};
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

//Permite apenas a alteração de propriedades existentes em um objeto
const person = {name : 'Wallace'};
Object.seal(person);

person.name = 'Wallace Custodio';
delete person.name;
person.age = 28;

console.log('\nVáriavel person após as alterações: ', person);