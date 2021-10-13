/*Operador binário
operando1 operador operando2
1 + 2 */

/*Operador unário
operando1 operador
operador operando2
x++
++x*/

//Módulo (%)
// Operador bínario. Retorna o inteiro restante da divisão de dois operandos.

12%5 // retorna 2.

//Incremento (++) e Decremento (--)

++x 
x++ 
const a = ++2; // 3
const b = ++2; // 2
--x 
x-- 

//Negação (-) e Adição (+)
-3 
+"3"   //retorna 3
+true  //retorna 1
+false //retorna 0
-true  //retorna -1

//Operador de exponenciação (**)
2** 3    //retorna 8
10 ** -1 //retorna 0.1

//Operador de agrupamento ()
2 * (3 * 2)

//ATRIBUIÇÃO
x = y 

//Atribuição de adição
x = x + y // ou 
x += y

//Atribuição de Subtração
x = x - y // ou 
x -= y

//Atribuição de multiplicação
x = x * y //ou
x *= y

//Atribuição de divição
x = x / y // ou 
x /= y

//Atribuição de resto
x = x % y // ou 
x %= y

//COMPARAÇÃO
//Igual(==)
//Retorna verdadeiro caso os operandos sejam iguais
"3" == var1
3   == '3'

//Não igual (!=)
//Retorna verdadeiro caso os operandos não sejam iguais 
var2 !="3"

//Estritamente igual (===)
//Retorna verdadeiro caso os operandos sejam igais e do mesmo tipo
3 === var1

//Estritamente não igual (!==)
//retorna verdadeiro caso os operandos não sejam iguams e/ou do mesmo tipo.
var1 !== "3"
3 !== 3

//MAior que (>)
//Retorna verdadeiro caso o operando da esquerda seja maior que o da direita
var2 > var1
"12" > 2

//Maior ou igual (>=)
//Retorna verdadeiro caso o oerando da esquerta seka maior ou igual ao da direita
var2 >= var1
var1 >= 3

//TERNÁRIO
condicao ? valor1 : valor2

true  ? 'foo' : 'bar'   //retorna foo
false ? 'foo' : 'bar'   //retorna bar

//Operadores Lógicos
exp1 && exp2

var a1 = true && true ;         // t && t retorna true
var a2 = true && false ;        // t && f retorna false
var a3 = false && true ;        // f && f retorna false
var a4 = false && (3 == 4) ;    // f && t retorna false
var a5 = "Gato" && "Cão" ;      // t && t retorna Cão
var a6 = false  && "Gato" ;     // f && t retorna false
var a7 = "Gato" && false ;      // t && f retorna false

// OU lógico (||) 
exp1 || exp2

var o1 = true || true ;         // t || t retorna true
var o2 = false || true;         // t || f retorna true
var o3 = true || false ;        // f || f retorna true
var o4 = false || (3 == 4) ;    // f || t retorna false
var o5 = "Gato" || "Cão" ;      // t || t retorna Gato
var o6 = false  || "Gato" ;     // f || t retorna Gato
var o7 = "Gato" || false ;      // t || f retorna Gato

//NOT lógico (!)
!exp1

var n1 = !true;     //!t retorna false
var n2 = !false;    //!f retorna true 
var n3 = !"Gato";   //!t retorna false

