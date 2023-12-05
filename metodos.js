// filter()
// descriçao: Cria um novo  array com os elementos que passaram na filtragem estabelecida pela funçao fornecida

// exemplo de uso:
//             [ 5letras, 9letras,     6letras,  6letras,  10letras   ]
const fruits = ["apple", "pineapple", "banana", "orange", "strawberry"];
const result = fruits.filter((word) => word.length <= 6);
console.log(result);//["apple", "banana", "orange"];



// reduce()
// descriçao: Executa uma funçao redutora em cada elemento do array, resultando em um unico valor de retorno

// exemplo de uso: Somar toos os numeros em um array
let numeros = [1, 2, 3, 4];
let soma = numeros.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
console.log(soma);



// slice()
// descriçao: retorna uma copia de parte de um array em um novo array, selecionado do inicio ao FileSystem(fim nao incluido)

// exemplo de uso: obter os 3 primeiros elementos de um array
//          [ 0        1            2         3         4          ] 
let fruits = ["apple", "pineapple", "banana", "orange", "strawberry"];
let subArray = fruits.slice(1, 4);//(start, end);
console.log(subArray);



// copywithin()
// copia um ou mais elementos do array e cola no lugar de um elemento(target) dentro do mesmo array sem mudar o tamanho do array. 

// exemplo de uso
//          [ 0        1            2         3         4          ] 
let fruits = ["apple", "pineapple", "banana", "orange", "strawberry"];
let resultado = fruits.copyWithin(0, 2, 3);//(target, start, end);
console.log(resultado);