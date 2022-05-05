// - Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.**


// 1 Leia o código abaixo


// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })


  // a) O que vai ser impresso no console?
  // R: Vai imprimir todos nomes com os apelidos em array

  // 2 Leia o código abaixo

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // a) O que vai ser impresso no console?
  // R: Sera impresso somente os nomes

  // 3 Leia o código abaixo

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //a) O que vai ser impresso no console?
  // R: Vai imprimir todos os nomes que o apelido nao seja Chijo

  // Exercícios de escrita de código


 // 1 Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

//  const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

// a) const novaArray = pets.map((item)=>{
//  return item.nome

//  })
//  console.log(novaArray)

// b) const novaArray = pets.filter((item) => {
//  return item.raca === "Salsicha"

// })
// console.log(novaArray)

// const novaArray = pets.filter((item) => {
//  return item.raca === "Poodle"
// })
// let mensagem = pets.map((item) => {


// })
//c Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: duvida
// "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
// Você pode encadear o uso do map e do filter

// function poodleCupom (pets){
//   return pets.raca === "Poodle"
// } 
// function retornarCupom(pets){
//   return `Você ganhou um cupom de desconto de 10% para a tosar o/a ${pets.nome}`

// }
// let retorno = pets.filter(poodleCupom).map(retornarCupom)
// console.log(retorno)

//2 Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// // a) Crie um novo array que contenha apenas o nome de cada item
 
// //     const novaArray = produtos.map((item)=>{
// //      return item.nome
    
// //      })
// //      console.log(novaArray)

// //b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles 


// const novaArray = produtos.map((item) => {
//   const desconto = (item.preco = ((item.preco / 100) * 95).toFixed(2))
//   return item
// })
// console.log(novaArray)

// //c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// // const novaArray = produtos.filter((item) => {
// //      return item.categoria === "Bebidas"
    
// //     })
// //     console.log(novaArray)

// //d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê" 
const novaArray = produtos.filter((item)=>{

if(item.nome.includes("Ypê")){
  return item.nome
}
})


console.log(novaArray)



// const arrayNovoD = produtos.filter((item)=>{
//   if (item.nome.includes('Ypê')){
//       return item.nome
//   }
// })
// console.log(arrayNovoD)


//const exibeInformacoes = empresas.map( empresa => `${empresa.nome}` + ' CEO: ' + `${empresa.CEO}`);


// const novaArray = produtos.map((item) => {
// return item.includes() 

// })
// console.log(novaArray)


// desafios

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]

// // const novaArray = pokemons.map((item) =>{
// //  novaArray.sort(pokemons)
// //})

// const novaArray = pokemons.map((nome)=>{
//  novaArray.sort()

// })
// console.log(novaArray)