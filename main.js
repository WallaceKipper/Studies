var nome   = "Wallace Custodio";
var idade  = 10;
var idade2 = 18;
var frase  = "Japão é o melhor time do mundo";
alert(nome + " tem " + idade + " anos." );
alert(idade+idade2);
console.log(nome);
console.log(idade+idade2);
console.log(frase.replace("Japão","Brasil")); // troca o que eu quiser
console.log(frase.toUpperCase()); // Deixa tudo em maiusculo
console.log(frase.toLowerCase()); // Deixa tudo em minusculo

var lista  = ["Maça ", "Pêra ", "Uva"];
lista.push("Laranja"); // Adiciona mais elementos 
lista.pop(); // Exclui o Ultimo
console.log(lista.join(" - "));// Separa a lista String com o que eu quiser
console.log(lista.toString()); //Transforma a lista em String
console.log(lista.length);// Mostra a quantidade de itens na lista
console.log(lista.reverse())// Exibe a Lista de tras pra frente
console.log(lista); //Exibe a lista
console.log(lista[1]);// Exibe um item especifico da lista

var fruta = {nome: "Maça", cor:"Vermelha"}
console.log(fruta);
console.log(fruta.nome);
alert(fruta.cor); // Nomeia e Classifica os itens da lista

var frutas = [{nome: "Maça", cor:"Vermelha"}, {nome: "Uva", cor:"Roxa"}]
console.log(frutas);
alert(frutas[1].nome);

var idade = prompt("Qual sua Idade?");
if (idade >= 18) {
	alert("Maior de idade");
}
else{
	alert("Menor de idade");
}

var count = 0; 
while (count  < 5){
	console.log(count);
	//count = count + 1; ou 
	count++;
}

var count;
for (count = 0; count <= 5; count++){
	alert(count);
};

var d  = new Date();
alert(d);
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());


function soma(n1 , n2){
return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
	return frase.replace(nome, novo_nome)
}
alert(soma(5,10));
alert(setReplace("Vai Japão", "Japão", "Braasiil"));

function validaIdade(idade) {
	var valida;
	if (idade >=18) {
		valida = true
	}
	else {
		valida = false
	}
	return valida;
}

var idade = prompt("Qual sua idade?");
console.log(validaIdade(idade));

function clicou() {
	document.getElementById("agradecimento").innerHTML = "Obrigado por Clicar";
	console.log("Obrigado por Clicar");
	alert("Obrigado por Clicar");
}

function redirecionar() {
	//window.open("http://google.com.br"); Mandar para outra Página
	window.location.href = "http://google.com.br";
}

function trocar(elemento) {
	document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
elemento.innerHTML = "Obrigado por passar o mouse";
	alert("trocar texto");
}

function voltar(elemento) {
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
elemento.innerHTML = "Passe o mouse aqui";
}

function funcaoChance(elemento){
	console.log(elemento.value)
}

