//Exercícios de interpretação de código

//Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// // a) Explique o que o código faz. Qual o teste que ele realiza? 
// R: Ele pede para o usario digitar dois numeros para saber se passou no teste, ele quer saber se o resto é = a 0

// b) Para que tipos de números ele imprime no console "Passou no teste"?       
// R: Para passar no testes os numeros tem que ser par
// c) Para que tipos de números a mensagem é "Não passou no teste"?
//R: quando o numero é impar ele nao passa no teste.

// //2 O código abaixo foi feito por uma pessoa desenvolvedora, 
// //contratada para automatizar algumas tarefas de um supermercado:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//      // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// // a) Para que serve o código acima?
// //R:Para o usuario pesquisar o preço das frutas

// // b) Qual será a mensagem impressa no console, se o valor de fruta 
// // for `"Maçã"`?
// //R:o preço da fruta, maça é, 2.25

// // c) Considere que um usuário queira comprar uma `Pêra`, qual 
// // seria a mensagem impressa no console se retirássemos o `break` 
// // que está logo acima do `default`
// //  (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
// //R: ele pula para o resultado do ultimo break

//3 Leia o código abaixo:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?
// R: Esta pedindo para o usuario digitar um numero

// b) Considere um usuário digitou o número 10. 
//Qual será a mensagem do terminal? E se fosse o número -10?
// R: Se digitar 10 a mensagem sera Esse numero passou no teste
// caso ele digite -10 a mensagem sera Essa mensagem é secreta

// c) Haverá algum erro no console? Justifique 
// usando os conceitos de bloco ou escopo
// 

// - Exercícios de escrita de código
//     1. Faça um programa que pergunta ao usuário qual a idade dele e
//      imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
//         a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
        
//         b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.
        
//         c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, 
//         caso contrário, imprima `"Você não pode dirigir."`

// let idade = Number(prompt("Qual sua idade"))

//     if(idade>=18){
//         console.log("Voce pode dirigir")}
//         else{
//             console.log("Voce nao pode dirigir")}
        
    
//  2 Agora faça um programa que verifica que turno do dia um aluno 
// estuda. Peça para digitar M (matutino) ou V (Vespertino) ou 
// N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!"
//  ou "Boa Noite!".
//  Utilize o bloco if/else

// const turno = prompt("Qual turno voce estuda, digite M para matutino, digite V para Vespertino, digite N para noturno")

// if(turno==="M"){
//     console.log("Bom dia")}
//     else if(turno==="V"){
//     console.log("Boa tarde")}
//     else if (turno==="N"){
//         console.log("Boa noite")}
//3Repita o exercício anterior, mas utilizando a estrutura de switch case agora.
// const turno = prompt("Qual turno voce estuda, digite M para matutino, digite V para Vespertino, digite N para noturno")

// switch (turno){
//     case "M":
//         console.log("Bom dia")
//         break;
//     case "V":
//         console.log("Boa tarde");
//         break;
//     case "N": 
//         console.log("Boa noite")
//     break;
// default :
//         console.log("Apenas M , V, N")  }  
           
// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia **e** se o 
// ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, 
// então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: `"Bom filme!"`,
//  caso contrário, imprima `"Escolha outro filme :("`

const filme = prompt("Qual genero de filme irá assistir?")
const valorFilme = Number(prompt("Qual o valor do ingresso?"))

if (filme === "fantasia"&& valorFilme <15){
    console.log("Bom filme")
}
else {
    console.log("Escolha outro filme")
}


