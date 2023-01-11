export type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export const afazeres: ToDo[] =[
    {userId: 1,
    id: 11,
    title: "Comprar arroz",
    completed: false    
    },
    {userId: 2,
    id: 22,
    title: "Limpar a casa",
    completed: true    
    },
    {userId: 3,
    id: 33,
    title: "Levar cachorro para passear",
    completed: false    
    }
]

export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
}

export const posts: Post[] = [
    {
      userId: 1,
      id: 11,
      title: "Texto sobre quando nao sabe o que colocar",
      body: "Não saber o que colocar em textos nos exercicios é uma coisa muito complicada"
    },
    {
      userId: 2,
      id: 22,
      title: "Imagina em 2 textos",
      body: "Se em um texto ja é dificil imagina fazer dois textos"
    },
    {
      userId: 3,
      id: 33,
      title: "Tres fica mais complicado",
      body: " Fazer tres textos para preencher exericicios as vezes é meio chato "
    },
]