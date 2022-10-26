import express, {Request, Response} from "express"

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())
app.get("/", (req:Request, res:Response) => {          
   res.status(201).send('Hello from Express')
})

app.listen(3003, () => {
    console.log("Server rodando na porta 3003");
});
//ex2
type User = {
    id: string,
    name: string,
    phone: number,
    email: string,
    website: string
    
}

//exe3
const usuarios: User[]= [
    {
        id: "asdasdqweqw-dasdasd-asdas-qw-e",
        name: "Mauricio da Rosa Gonçalves",
        phone: 48-999911231,
        email: "Mau@hotmail.com",
        website: "mauricio.com.br"

    },
    {
        id: "asdaiuouodqweqw-doippklasd-asas",
        name: "Sueli da Rosa Gonçalves",
        phone: 48-988811231,
        email: "sue@hotmail.com",
        website: "sueli.com.br"

    },
    {
        id: "iuouodbnmbnmw-donvbbvsd-asas",
        name: "Filipe da Rosa Gonçalves",
        phone: 48-988811231,
        email: "fil@hotmail.com",
        website: "filipe.com.br"

    },
]

//exe4

app.get("/usuarios", (req:Request, res:Response) => {
    if(!usuarios.length){
        res.status(401).send("Não existe esse Usuario")
    }
res.status(201).send(usuarios)
})


//exe5

type Post  = {
    id: string,
    title: string,
    body: string,
    userId: string
}

//exe6


const posts: Post[] =[
    {
        id: "aaaaaaa-aaaaaaa-aaaaa",
        title: "Aguas passadas",
        body: "Porque aguas passadas nao movem moinho",
        userId: "89089"
    },
    {
        id: "bbbbbbbb-bbbbb-bbbbbb",
        title: "Baleias",
        body: "Baleias que voam nas nuvens de sal",
        userId: "435354"
    },
    {
        id: "cccccc-cccccc-ccccc",
        title: "Calvos",
        body: "Charopes bom para calvice",
        userId: "123121"
    }
]
//exe7
app.get("/posts", (req:Request, res:Response) => {
    if(!posts.length){
        res.status(401).send("Não existe esse Post")
    }
res.status(201).send(posts)
})

//exe8

app.get("/posts/user/:userId", (req:Request, res:Response) => {
    if(!posts.length){
        res.status(401).send("Não existe esse Post")
    }
res.status(201).send(posts)
})
