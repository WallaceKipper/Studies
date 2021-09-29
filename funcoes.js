function soma(){
var n1 = prompt("Digite o Primeiro Valor");
var n2 = prompt("Digite o Segundo Valor");
var somar = prompt("Qual Operação deseja fazer? \n 1° - Somar \n 2° - Subtrair \n 3° - Dividir \n 4° - Multiplicar");
if (somar == 0 || somar >= 5) {
    alert("Digite um Valor Válido")
}else if (somar == 1) {
    alert("O Resultado da Soma é \n " +(Number(n1)+Number(n2)))
}
else if (somar == 2) {
    alert("O Resultado da Subtração é \n " +(Number(n1)-Number(n2)))
}
else if (somar == 3) {
    alert("O Resultado da Divisão é \n " +(Number(n1)/Number(n2)))
}
else if (somar == 4) {
    alert("O Resultado da Multiplicação é \n " +(Number(n1)*Number(n2)))
}
}
function dec(){
    var n1 = prompt("Digite o Primeiro Valor");
    var n2 = prompt("Digite o Segundo Valor");
    var n3 = prompt("Digite o Segundo Valor");
    //321
if (n1>n2 & n1>n3 & n2>n3) {
    alert("A Ordem decrescente é \n " + n1 + " - " + n2 +" - " + n3)
}
//312
if (n1>n2 & n1>n3 & n2<n3) {
    alert("A Ordem decrescente é \n " + n1 + " - " + n3 +" - " + n2)
}
//213
if (n1>n2 & n1<n3 & n2<n3) {
    alert("A Ordem decrescente é \n " + n3 + " - " + n1 +" - " + n2)
}
//231
if (n1<n2 & n1>n3 & n2>n3) {
    alert("A Ordem decrescente é \n " + n2 + " - " + n1+" - " + n3)
}
//123
if (n1<n2 & n1<n3 & n2>n3) {
    alert("A Ordem decrescente é \n " + n3 + " - " + n2+" - " + n1)
}
//132
if (n1<n2 & n1<n3 & n2>n3) {
    alert("A Ordem decrescente é \n " + n2 + " - " + n3+" - " + n1)
}
}
function cre(){
    var n1 = prompt("Digite o Primeiro Valor");
    var n2 = prompt("Digite o Segundo Valor");
    var n3 = prompt("Digite o Segundo Valor");
    //321
if (n1>n2 & n1>n3 & n2>n3) {
    alert("A Ordem Crescente é \n " + n3 + " - " + n2 +" - " + n1)
}
//312
if (n1>n2 & n1>n3 & n2<n3) {
    alert("A Ordem Crescente é \n " + n2 + " - " + n3 +" - " + n1)
}
//213
if (n1>n2 & n1<n3 & n2<n3) {
    alert("A Ordem Crescente é \n " + n2 + " - " + n1 +" - " + n3)
}
//231
if (n1<n2 & n1>n3 & n2>n3) {
    alert("A Ordem Crescente é \n " + n3 + " - " + n1+" - " + n2)
}
//123
if (n1<n2 & n1<n3 & n2<n3) {
    alert("A Ordem Crescente é \n " + n1 + " - " + n2+" - " + n3)
}
//132
if (n1<n2 & n1<n3 & n2>n3) {
    alert("A Ordem Crescente é \n " + n1 + " - " + n3+" - " + n2)
}
}
function menor(){
    var n1 = prompt("Digite o Primeiro Valor");
    var n2 = prompt("Digite o Segundo Valor");
    var n3 = prompt("Digite o Segundo Valor");
if (n1>n2 & n1>n3) {
    alert("O Menor Número é o  \n " + n1)
}
if (n1<n2 & n2>n3) {
    alert("O Menor Número é o  \n " + n2)
}
if (n3>n2 & n1<n3) {
    alert("O Menor Número é o  \n " + n3)
}
}