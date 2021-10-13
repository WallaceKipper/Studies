const users = ['Wallace', 'Grasielly', 'Luiz'];

const gender = {
    MAN   : Symbol('M'),
    WOMAN : Symbol('W')
}

const persons = [{
    name: 'Wallace',
    age: 28,
    gender: gender.MAN
},
{
    name: 'Grasielly',
    age: 22,
    gender: gender.WOMAN
},
{
    name: 'Luiz',
    age: 22,
    gender: gender.MAN
}
];
//Retorna a quantidade de itens de um array
console.log('Itens: ', persons.length);

// Verifica se é array
console.log('A variável persons é um array: ', Array.isArray(persons));

//Alter os itens do array
persons.forEach(persons => {
    console.log('Nome: '+ persons.name);
});

//Filtrar array
const mens = persons.filter(person => persons.gender === gender.MAM);
console.log('\nNova lista apenas com Homens: ', mens);

//Retornar um novo
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

console.log('\nPessoas com a adição do course: ',personsWithCourse);

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) =>{
    age += person.age;
    return age;
}, 0);

console.log('\nSoma de idade das pessoas ', totalAge);

//Juntando operações
const totalEvenAges = persons
                        .filter(persons => person.age % 2===0)
                        .reduce((age, person) =>{
                            age += person.age;
                            return age;
                        }, 0);

console.log('\nSoma de idade das pessoas que possuem idade par ', totalEvenAges);