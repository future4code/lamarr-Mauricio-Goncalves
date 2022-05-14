// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  let array1 = array.length
  return array1
}



// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  let array1 = array.reverse(array)
  return array1
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let array1 = array.sort(compararFuncoes)
  return array1
}
function compararFuncoes(a, b) {
  return a - b

}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const par = x => x % 2 === 0
  const array1 = array.filter(par)
  return array1
}




// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let arrayVazio = []
  for (let numero of array) {
    if (numero % 2 == 0) {

      let conta = Math.pow(numero, 2)
      arrayVazio.push(conta)
    }
  }
  return arrayVazio
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let arrayMaiorNum = Math.max(...array);

  return arrayMaiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  const maiorNumero = Math.max(num1, num2)
  const menorNumero = Math.min(num1, num2)
  const divisivelPorMaior = maiorNumero % menorNumero == 0
  const diferencaNumero = maiorNumero - menorNumero

  return {
    "maiorNumero": maiorNumero,
    "maiorDivisivelPorMenor": divisivelPorMaior,
    "diferenca": diferencaNumero
  }
}



// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let primeirosPares = []
  for (let i = 0; n > primeirosPares.length; i++) {
    if (i % 2 == 0) {
      primeirosPares.push(i);
    }
  }
  return primeirosPares

}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
    return "Equilátero"
  }
  else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    return "Isósceles"
  }
  else {
    return "Escaleno"
  }


}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let segundoMaior = array.sort((a, b) => a - b)
  return [segundoMaior[segundoMaior.length - 2], segundoMaior[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  let nomeFilme = filme.nome
  let anoLançamento = filme.ano
  let diretorFilme = filme.diretor
  let atoresFilme = filme.atores
  return `Venha assistir ao filme ${nomeFilme}, de ${anoLançamento}, dirigido por ${diretorFilme} e estrelado por ${atoresFilme.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const pessoaAnonima = {
    ...pessoa,
    nome: "ANÔNIMO"

  }
  return pessoaAnonima
}


// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let pessoaAptas = []
  for (let pessoa of pessoas) {
    if (
      pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade <= 60
    ) {
      pessoaAptas.push(pessoa)
    }
  }
  return pessoaAptas
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoaInaptas = []
  for (let pessoa of pessoas) {
    if (
      pessoa.altura < 1.5 || pessoa.idade <= 14 || pessoa.idade > 60
    ) {
      pessoaInaptas.push(pessoa)
    }
  }
  return pessoaInaptas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  let saldoAtualizado = []
  for (let conta of contas) {


  }

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  let array = consultas.sort(function (a, b) {
    if (a.nome > b.nome) { return 1; }
    if (a.nome < b.nome) { return -1; }

  })
  return array
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  let array = consultas.sort(function (a, b) {
    return a.datadaConsulta < b.dataDaConsulta
  })
  return array
}