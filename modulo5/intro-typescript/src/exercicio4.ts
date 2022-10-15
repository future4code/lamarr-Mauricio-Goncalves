function comparaDoisNumeros(num1:number, num2:number) {
    let maiorNumero;
    let menorNumero;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
    console.log(`O maior numero é ${maiorNumero}`)
    return diferenca 
  }

  console.log(comparaDoisNumeros(4, 4));
  