//Currying = Função para salvar parametros e retorna-los quando precisar 
/*function soma(a) {
    return function(b){
        return a + b;        
    }
}
    const soma2 = soma(2);

    console.log(soma2(2));
    console.log(soma2(3));
    console.log(soma2(4));
    console.log(soma2(5));*/



//Imutabilidade = 
/*const user = {
    name: "Wallace",
    LastName: "Custódio Batista"
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName:`${user.name} ${user.lastName}`
    }
    
}
const userWithFullName = getUserWithFullName(user);
 console.log(userWithFullName, user);

 const students = [
     {
         name : 'Grasielly',
         grade : 7
     },
     {
        name : 'Wallace',
        grade : 8
    },
    {
        name : 'Kahuan',
        grade : 3
    }
 ];

 function getApprovedStudents(studentsList) {
     return studentsList.filter(student => student.grade >= 7);     
 }

 console.log('Alunos aprovados');
 console.log(getApprovedStudents(students));

 console.log('\nLista de Alunos');
 console.log(students);*/

 const persons = ['Guilherme', 'Pedro' , 'Jennifer' ];

 persons.push('João');

 persons.shift();

 persons[1] = 'James';

 console.log('\n Array após as alterações: ', persons);