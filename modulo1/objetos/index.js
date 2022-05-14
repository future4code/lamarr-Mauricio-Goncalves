// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// Matheus Nachtergaele
// virginia cavendish
// canal globo 14h

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

// // nome juca idade 3 raca Srd 
// // nome juba idade 3 raca srd 
// // nome jubo idade 3 raca srd
// os 3 ponto copia o objeto conseguindo modificalo

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))


// //false pois foi pedido no console perguntando se era backender
// // undefained por que nao tem altura declarada

//Exercícios de escrita de código

//1 1. Resolva os passos a seguir: 
    
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**). D
// epois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo**:**
// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
//  // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// const pessoa = {
//     nome: "Mauricio",
//     apelidos: ["Mau Mau", "Mau", "Icinho"]
// }
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa.apelidos}`)

// // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.
// //  Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const pessoa1 = { ...pessoa, apelidos: ["Mauzinho", "Babysaudo", "bebe"]

// }
// console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de ${pessoa1.apelidos[0]}, ${pessoa1.apelidos[1]}, ${pessoa1.apelidos[2]}`)

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    
//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:
    
//     1. O valor de `nome`
//     2. O numero de caracteres do valor `nome`
//     3. O valor de `idade`
//     4. O valor de `profissão`
//     5. O numero de caracteres do valor `profissão`

// const pessoa1 = {
//   nome: "Mauricio",
//   idade: 32,
//   profissao: "estudante"
// }
// const pessoa2 = {
//   nome: "Filipe",
//   idade: 34,
//   profissao: "Adm"
// }

// // console.log(pessoa1, pessoa2)

// console.log(`o nome é [${pessoa1.nome} ${pessoa2.nome}, ${pessoa1.nome.length}, ${pessoa1.idade}, ${pessoa2.idade}, ${pessoa1.profissao}, ${pessoa2.profissao}, ${pessoa1.profissao.length}, ${pessoa2.profissao.length}]`)

// 3. Resolva os passos a seguir: 
    
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

// d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// let carrinho = []

// const fruta1 = {
//     nome: "uva",
//     disponibilidade: true
// }
// const fruta2 = {
//     nome: "banana",
//     disponibilidade: true
// }
// const fruta3 = {
//     nome:"maça",
//     disponibilidade: true

// }

// console.log(carrinho.push(fruta1, fruta2, fruta3))
// console.log(carrinho)

function calculamenor5(num){ 
    var array = [];
    for(var i=0; i<num; i++) {
      array.push(i);
    }
    return array;
  }
   
  console.log(calculamenor5(5));