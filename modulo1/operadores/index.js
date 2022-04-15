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

    /*let idade1 = Number(prompt("Qual é a sua idade!"))
    let idade2 = Number(prompt("Qual é a idade do seu melhor amigo!"))
    let maior = idade1 > idade2
    console.log("Sua idade é aior do que a do seu melhor amigo?", maior)


    
    let subtracao = idade1 - idade2
    console.log("Diferença de idade", subtracao)

    
   
   let minhaidade = 32
   let subtração = idadeAmigo - minhaidade
   console.log("diferença", subtração)*/

  /*2. Faça um programa que:
    
   a) Peça ao usuário que insira um número **par**
   
   b) Imprima na console **o resto da divisão** desse número por 2.
   
   c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.
   
   d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código*/
   // D R: Caso o numero for impar ele vai dar o resto da divisão como numero 1

   /*let numeroPar = Number(prompt("por favor insura um numero par!"))
   let restoDaDivisao = 2
   console.log("O resto da divisão!", numeroPar % restoDaDivisao)*/



   /*3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 
    
    a) A idade do usuário em meses
    
    b) A idade do usuário em dias
    
    c) A idade do usuário em horas*/

    // let idade = Number(prompt("Qual sua idade?"))
    // let idadeHora = 365 * 24
    // console.log("Sua idade em mes é!", idade * 12)
    // console.log("Sua idade em dias é!", idade * 365)
    // console.log("Sua idade em horas é!", idade * idadeHora)

    
    
    // 4 Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:
    
    
    // ```html
    // O primeiro numero é maior que segundo? true
    // O primeiro numero é igual ao segundo? false
    // O primeiro numero é divisível pelo segundo? true
    // O segundo numero é divisível pelo primeiro? true
    
    // obs: O true ou false vai depender dos números inseridos e do resultado das operações.

    

    /*let numero1 = Number(prompt("Digite um numero!"))
    let numero2 = Number(prompt("Digite outro numero"))
    console.log("O primeiro numero é maior que o segundo", numero1 > numero2)
    console.log("O primeiro numero é igual ao segundo?", numero1 == numero2)
    console.log("O primeiro numero é divisível pelo segundo?", numero1 % numero2 == 0)
    console.log("O segundo numero é divisível pelo primeiro?", numero2 % numero1 == 0)*/
//Number(prompt("Digite uma temperatura em Fahrenheit!"))
  
/* Desafio
  a) Calcule e mostre o valor de 77°F em  K, mostrando a unidade no console também.

b) Calcule e mostre o valor de 80°C em °F, mostrando a unidade no console também

c) Calcule e mostre o valor de 30°C em °F e K, mostrando as unidades no console também

d) Altere o último item para que o usuário insira o valor em graus Celsius que ele deseja converter*/ 
    //  let grausFahrenheit= 77
    // let kelvin = (grausFahrenheit - 32)*(5/9) + 273.15

    // console.log(kelvin,"K")
    
    // let grausCelcius = 80
    // let fahrenheit = (grausCelcius) *(9/5) + 32
    // console.log(fahrenheit, "F")

    // let grausCelcius = 30
    // let fahrenheit = (grausCelcius) *(9/5) + 32
    // console.log(fahrenheit, "F")
    // let resultado = (fahrenheit - 32)*(5/9) + 273.15
    // console.log(resultado, "k")

    // let grausCelcius = Number(prompt("Digite gral Celcius"))
    // let fahrenheit = (grausCelcius) *(9/5) + 32
    // console.log(fahrenheit, "F")
    // let resultado = (fahrenheit - 32)*(5/9) + 273.15
    // console.log(resultado, "k")

    // 2. Quilowatt-hora é uma unidade de energia; e é muito utilizada para se determinar o consumo de energia elétrica em residências.
    // Sabe-se que o quilowatt-hora de energia custa R$0.05. Faça um programa que receba a quantidade de quilowatts consumida por uma residência.
    
    // a) Calcule e mostre o valor a ser pago por uma residência que consuma 280 quilowatt-hora
    
    // b) Altere o programa para receber mais um valor: a porcentagem de desconto. Calcule e mostre o valor a ser pago pela mesma residência acima considerando 
    //15% de desconto

    // let quilowattHora = 0.05
    // let consumo = 280
    // let desconto = 15/100 
    // let valor = quilowattHora * consumo
    // console.log("Consumo Quilowatthora", quilowattHora * consumo)
    // console.log("valor a ser pago", valor * desconto)

    // 3. Um grande problema que o mundo tem atualmente é a quantidade de unidades que existem para representar a mesma coisa. Por exemplo, para representar a Massa de um corpo, 
    // podemos usar quilograma (kg), onça (oz) e até libra (lb). Para representar Distâncias, existem metro (m), pés (ft), milha (mi). Até para volumes, há várias opções: litro (l),
    //  galão (gal),  xícaras (xic). Dada essa introdução, faça o que se pede:
    
    // a) Procure uma forma de converter libra (lb) para quilograma (kg) e escreva um programa que converta 20lb para kg. Imprima  a resposta no console da seguinte forma: 
    // `20lb equivalem a X kg`
    
    // b) Procure uma forma de converter onça (oz) para quilograma (kg) e escreva um programa que converta 10.5oz para kg. Imprima  a resposta no console da seguinte forma: 
    // `10.5oz equivalem a X kg`
    
    // c) Procure uma forma de converter milha (mi) para metro (m) e escreva um programa que converta 100mi para m. Imprima  a resposta no console da seguinte forma: 
    // `100mi equivalem a X m`
    
    // d) Procure uma forma de converter pés (ft) para metro (m) e escreva um programa que converta 50ft para m. Imprima  a resposta no console da seguinte forma: 
    // `50ft equivalem a X m`
    
    // e) Procure uma forma de converter galão (gal) para litro (l) e escreva um programa que converta 103.56gal para litro. Imprima  a resposta no console da seguinte forma: 
    // `103.56gal equivalem a X l`
    
    // f) Procure uma forma de converter xícara (xic) para litro (l) e escreva um programa que converta 450xic para litro. Imprima  a resposta no console da seguinte forma: 
    // `450 xic equivalem a X l`
    
    // g) Escolha ao menos **um** dos itens anteriores e modifique o programa para que ele peça ao usuário o valor da unidade original antes de converter

    //a  let libra = 20
    // let quilograma = (libra / 2.205)
    //  console.log ("20lb equivalem a", quilograma, "kg")

    // b let oz = 10.5
    // let quilograma = (oz / 35.274)
    // console.log("10.5oz equivalem a", quilograma, "kg")

    // c let milhas = 100
    // let metro = (milhas * 1609)
    // console.log("100mi equivalem a", metro, "m")

    // d let pes = 50
    // let metro = (pes / 3.281)
    // console.log("50ft equivalem a", metro, "m")

    // e let gal = 103.56
    // let litro = (gal * 3.785)
    // console.log("103.56 gal equivalem a", litro)

    // f let xic = 450
    // let litro = (xic * 0.24)
    // console.log("450 xic equivalem a", litro)

// g let libra = Number(prompt("Digite peso e libras!"))
// let quilograma = (libra / 2.205)
// console.log (quilograma, "kg")





    



    






