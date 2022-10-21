enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type filme = {
    nome: string;
    anoLancamento: number;
    genero: GENERO;
    pontuacao?: number;
  };
  
  const films = (
    nome: string,
    ano: number,
    genero: GENERO,
    nota?: number
  ): filme => {
    if (nota) {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero,
        pontuacao: nota
      };
    } else {
      return {
        nome: nome,
        anoLancamento: ano,
        genero: genero
      };
    }
  };
   console.log(films("Duna", 2021, GENERO.ACAO, 74));