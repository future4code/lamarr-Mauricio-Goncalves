
import  express, { Request, Response} from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())







//exe1

app.get("/ping", (req: Request, res: Response) => {          
    res.send("Pong!")
})


app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})


//exe4

app.get("/todos/completed/:isCompleted", (req:Request, res: Response)=>{



    res.status(201).send("Pong!")

})