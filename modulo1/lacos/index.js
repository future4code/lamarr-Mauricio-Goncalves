

// 1 O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)


// R: ele esta somando o valor 5x, o resultado é 10 pq a primeira soma da 0 +1 =1 +2 = 3 3 +3 = 6 6 +4 = 10 

// 2. Leia o código abaixo:


// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }


// a) O que vai ser impresso no console?
//R: 19, 21, 23, 25,27,30
// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Não é o suficiente, precisaria criar uma variavel para acessar o array

//3 Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

//     const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
//R: *, ** , ***, ****, 



// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

//     a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

//     b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array


//     c) Por fim, imprima o array com os nomes dos bichinhos no console


// let bichinhos = Number(prompt("Quantos bichinhos de estimação você tem?"))
// if(bichinhos ==0){
// console.log("Que pena! Você pode adotar um pet! ")
// }
// let arrayBichos=[]

//   for(i=0; i<bichinhos; i++){
//       let bichosNomes =prompt("Digite os nomes dos seus bichinhos")

//       arrayBichos.push(bichosNomes)

//     }
// console.log(arrayBichos)


// 2. Considere que você tenha acesso a um `array`  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, 
// crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

//     a) Escreva um programa que **imprime** cada um dos valores do array original.

//     b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

//     c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

//     d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

//     e) Escreva um programa que imprima no console o maior e o menor números contidos no array original


//a const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// function arrayNumero(numeroArray){
//     for(let numero of array)
//     console.log(numero)
// }
// arrayNumero(array)


//b const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
// function arrayNumero(numeroArray){
//     for(let numero of array)
//     console.log(numero/10)
// }
// arrayNumero(array)

//c const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function arrayNumero(numeroArray) {
//     let novaArray = []
//     for (let numero of array) {
//         if(numero%2 ===0)
//         novaArray.push(numero)
        
//     }
//     console.log(novaArray)
// }
// arrayNumero(array)

//   d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function arrayString(stringArray){
//     let novoArray = []
//     for(i=0; i<array.length; i++){
//         let string = (`O elemento do índex ${i} é: ${array[i]}`)
//         novoArray.push(string)
//     }
//     for(let string of novoArray){
//         console.log(string)
//     }
// }
// arrayString(array)

//e) Escreva um programa que imprima no console o maior e o menor números contidos no array original
// const arrayDeNumeros = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// function maior(array){
//     let maiorNumero=0;
//     for(let numeroDoArray of arrayDeNumeros){
//         if(numeroDoArray>maiorNumero){
//             maiorNumero=numeroDoArray;
//         }
//     }
// let menorValor = maiorNumero;
// for(let arrayMenor of arrayDeNumeros){
//   if(arrayMenor<menorValor){
//         menorValor=arrayMenor;
//     }
// }
// console.log(`O maior numero é: ${maiorNumero}, e o menor numero é ${menorValor}`)
// }
// maior(arrayDeNumeros)