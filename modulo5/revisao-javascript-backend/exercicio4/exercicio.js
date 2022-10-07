const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]


const arr = primeiraLista.concat(segundaLista)

const newArray = arr.filter(function(elem, pos, self){
    return self.indexOf(elem) ===pos;
})


console.log(newArray);



// // ## Gerador de itens únicos

// A ideia é unir duas listas de objetos, mas sem repetir os que possuem o mesmo valor em uma propriedade.

// ### Entrada

// Duas listas de objetos com propriedade nome.

// ### Saída

// Uma lista unificada com todos os objetos recebidos, porém sem repetir nomes.

// ### Validações

// Sem validação.