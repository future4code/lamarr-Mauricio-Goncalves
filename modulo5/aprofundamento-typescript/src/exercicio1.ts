// O Typescript é uma linguagem um pouco mais criteriosa que o Javascript,
// então vamos conhecer um pouco desses critérios.

// a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. 
//Tente atribuir um número a esta variável. O que acontece?
// R: O tipo number não pode ser atribuido a tipo string.

// b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript
 // uma variável que aceite mais de um tipo de valor?

// c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
//Crie um **tipo** `Pessoa` para garantir que todos os objetos tenham os mesmos campos.

// d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as
// cores do arco-íris. Utilize um `enum` para isso.

// a) const minhaString: string = "2"

// b)const meuNumero: string | number = 2
// meuNumero = "dois",

//c)
type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}
enum Cores {
    AZUL = "Azul",
    VERDE = "Verde",
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const pessoa1 :Pessoa = {
    nome: "Mauricio",
    idade: 32,
    corFavorita: Cores.VERDE
}
const pessoa2 :Pessoa = {
    nome: "Filipe",
    idade: 35,
    corFavorita: Cores.AMARELO
}



const pessoa3 :Pessoa = {
    nome: "Hamilton",
    idade: 72,
    corFavorita: Cores.AZUL
}