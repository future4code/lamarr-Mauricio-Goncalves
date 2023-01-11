import express, {Request, Response} from "express";
import { connection } from "./database/connection";
import cors from 'cors';

const app = express()

app.use(express.json())

app.use(cors())

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
      return result[0][0]
  }

app.get("/users/:id", async (req: Request, res: Response) => {
    
    
    
    try {

      const id = req.params.id
  
      console.log(await getActorById(id))
  
      res.end()
    } catch (error) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }




});







app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});