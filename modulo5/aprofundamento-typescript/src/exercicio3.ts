// Considere que você esteja implementando uma rede social composta por posts de usuários. 
// Cada um dos posts possui: um autor e um texto.

// Observe o seguinte array de posts:
type Post ={
    autor: string,
    texto: string
}


const posts: Post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]


// a) Copie o código acima para um arquivo .ts depois:

// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.



//Dica Lembre-se da variável de tipo do typescript, que é uma descrição estrutural do comportamento de um objeto.
// Ou seja, o type define as propriedades e tipos que o objeto deve ter. 

// type person = { 
//     name: string, 
//     age: number
//     }
    
//     const astrodev: person = {
//     name: "Astrodev",
//     age: 30
//     }

//b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

function buscarPostsPorAutor(posts:Post[], autorInformado:string):Post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }

//Quais são as entradas e saídas dessa função?
 //Copie a função para o mesmo arquivo .ts do array de posts e faça a tipagem necessária. 