function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let quantidadeVezes = 0
  for(let x of arrayDeNumeros) {
    if(x == numeroEscolhido){
      quantidadeVezes ++
    }
  }
 if(quantidadeVezes == 0){
   return 'Número não encontrado'
 }
 else{
   return `O número ${numeroEscolhido} aparece ${quantidadeVezes}x`
 }
  }