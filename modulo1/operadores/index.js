// 1 Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.
/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) // false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) //false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado) //true

console.log("d. ", typeof resultado) */

//2Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 
//R: o problema que ele nao esta somando e sim juntando os dois numeros
/*let primeiroNumero = Number(prompt("Digite um numero!"))
let segundoNumero = Number(prompt("Digite outro numero!"))

let soma = primeiroNumero + segundoNumero

console.log(soma)*/

// 3Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
// R: Para resolver o problema tem que por Number na frente do prompt para ele efetuar a soma

/* 1. Faça um programa que:
    
    a) Pergunte a idade do usuário
    
    b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
    
    c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
    
    d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

    let nome = prompt("Qual é o seu nome!")
    let idadeAmigo = prompt("Qual é a idade do seu melhor amigo!")
   console.log("Sua idade é maior do que a do seu melhor amigo?","true ou false") 
   let minhaidade = 32
   let subtração = idadeAmigo - minhaidade
   console.log("diferença", subtração)

