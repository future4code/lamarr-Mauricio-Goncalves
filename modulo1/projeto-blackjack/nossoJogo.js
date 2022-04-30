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
console.log("Bem vindo ao jogo!")
   if (confirm("Você quer iniciar o jogo")){
      console.log("Nova rodada!")
   }
   else { console.log("O jogo acabou!")
   }

   const carta = comprarCarta();
   console.log(carta.texto)
   console.log(carta.valor)
