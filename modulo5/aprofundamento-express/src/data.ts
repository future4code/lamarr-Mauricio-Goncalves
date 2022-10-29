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