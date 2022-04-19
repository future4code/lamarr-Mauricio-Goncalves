// 1 Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)

// array = null
// console.log('b. ', array)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i])

// array[i+1] = 19
// console.log('e. ', array)

// const valor = array[i+6]
// console.log('f. ', valor)

// a. undefined
//b. null
//c. 11
//d.  3
//e. vai trocar o valor do 4 por 19, ficando 3, 19, 5, 6 ,7
//f 9

// //2Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// //R:SUBI NUM ONIBUS EM MIRROCOS 27


//1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
//O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!

// let email = prompt("Digite seu email")
// console.log(`O email ${email}, foi cadastrado com sucesso. Seja bem vindo ${email}!`)
//2 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
// a) Imprima no console o array completo
    
// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no consolea nova lista

// const comida = ["Lasanha", "Churrasco", "Galinha ensopada", "Pizza", "Pastel"]
// //console.log(comida)

//  console.log( `Minhas comidas favoritas são:
//  ${comida[0]}
// ${comida[1]}
//  ${comida[2]}
//  ${comida[3]}
// ${comida[1]}`)

// const comidaUsuario = prompt("Digite sua comida favorita")
// comida[1] = comidaUsuario

// console.log(comida)

// 3. Faça um programa, seguindo os passos:
    
// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array

// c) Imprima o array no console

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// e) Remova da lista o item de índice que o usuário escolheu.

// f) Imprima o array no console

// let listaDeTarefas = []
// let tarefa1 = prompt("Digite uma tarefa diaria")
// let tarefa2 = prompt("Digite outra tareda diaria")
// let tarefa3= prompt("Digite mais uma tarefa diaria")
// listaDeTarefas.push(tarefa1, tarefa2,tarefa3)
// console.log(listaDeTarefas)
// let removaUmaTarefa = prompt("Digite uma tarefa que vc ja fez")
// listaDeTarefas.splice(removaUmaTarefa, 1)
// console.log(`Voce ja finalizou a rarefa ${removaUmaTarefa}, resta agora a tarefa ${listaDeTarefas}`)

// 1. Receba uma frase e retorne um array onde cada elemento é uma das palavras da frase, ignorando os espaços

// 2. Dado o array `["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]`, faça um programa que acha o índice da palavra Abacaxi e imprime tanto o índice quanto o tamanho do array

// const frase = prompt("Escreva uma frase")
// let fraseSeparada = [frase.split(" ")]
// console.log(fraseSeparada)

const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const indice = frutas.indexOf("Abacaxi")
console.log(`O indice da palavra abacaxi é: ${indice}, e o tamanho do array é: ${frutas.length}`)









