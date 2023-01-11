import { ToDo, afazeres, Post, posts} from "./data"
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
//exe5

app.post("/todos", (req, res) => {
  const userId = req.body.userId
  const title = req.body.title

  const newTodo: ToDo = {
    userId,
    id: Date.now(),
    title,
    completed: false
  }

  afazeres.push(newTodo)

  res.send(afazeres)
})
//exe6
app.put("/todos/:id/completed", (req, res) => {

      const id = Number(req.params.id)
    
      for (let todo of afazeres) {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
      }
    
      res.send(afazeres)


//exe7

app.delete("/todos/:id", (req, res) => {

      const id = Number(req.params.id)
    
      for (let i = 0; i < afazeres.length; i++) {
        if (afazeres[i].id === id) {
          afazeres.splice(i, 1)
        }
      }
    
      res.send(afazeres)
    })
    //exe8
    app.get("/users/:userId/todos", (req, res) => {
      const userId = Number(req.params.userId)
    
      const result = []
    
      for (let todo of afazeres) {
        if (todo.userId === userId) {
          result.push(todo)
        }
      }
    
      res.send(result)
    }),