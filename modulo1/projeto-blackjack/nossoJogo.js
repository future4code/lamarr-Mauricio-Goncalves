/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
   console.log("Projeto Blackjack") 
console.log("Bem vindo(a) ao jogo de Blackjack!")
   if (confirm("Você quer iniciar uma nova rodada?")){

      let carta1 = comprarCarta()
      let carta2 = comprarCarta()
      let cartaPc1 = comprarCarta()
      let cartaPc2 = comprarCarta()
      let somaValor = carta1.valor + carta2.valor
      let somaValor2 = cartaPc1.valor + cartaPc2.valor
    
      console.log("Usuario - cartas:", carta1.texto ,"+", carta2.texto, "-", somaValor)
      console.log("Computador - cartas:", cartaPc1.texto, "+", cartaPc2.texto ,"-",somaValor2) 
   if(somaValor === somaValor2 ){
      console.log("Empate!")}
   if(somaValor > somaValor2){
      console.log("Usuario Ganhou!")
   }
   if(somaValor < somaValor2){
      console.log("Computador Ganhou!")
   }
   
      }

     else{
        console.log("O jogo Acabou") 
   }

   

  
  

  
  
  
  
  
  
  
  
  // const resultadoUsuario = carta1.texto + carta2.valor
      // const resultadoPC = cartaPc1.texto + cartaPc2.valor
      // console.log(`Usuario - cartas:, ${carta1.valor + carta2.texto}`),
      // console.log(`Computador - cartas: ${cartaPc1.valor +cartaPc2.texto} -`) 
      // // console.log("Computador - cartas:",resultadoPC, "-") 
     
      //  const resultadoUsuario = [carta1.texto + carta2.texto]
      //  const resultadoPC = [cartaPc1.texto + cartaPc2.texto]
  
  
  
  
  
   // if(resultadoUsuario > 21){
   //    console.log("Empate");}
   // } else if(resultadoUsuario < 21 !== resultadoPC <=21){
   //    console.log("Usuario Ganhou!")
   // }
   

   
   
  
   
  












 //    let comprarCarta = carta.texto
   // let comprarCarta2 = carta.texto
   // let pcCompraCarta = carta.texto
   // let pcCompraCarta2 = carta.texto
   // if (comprarCarta + comprarCarta2 <= 21 && pcCompraCarta + pcCompraCarta2 >=21 )
   // console.log(carta.texto)
   // console.log(carta.valor)
   // console.log("Você Ganhou!")


   // const carta = comprarCarta()

// if(carta.valor, carta.texto === 21){
// console.log("Voce Ganhou")
// }
// else (confirm("Você quer comprar uma carta?"))
// {

// }