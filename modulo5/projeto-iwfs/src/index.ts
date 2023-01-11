import express, {Express ,Request, Response} from "express"
import { accounts } from "./accounts"
import cors from 'cors'

const app:Express = express()

app.use(express.json())

app.use(cors())


app.post("/users/create", (req:Request, res: Response)=>{
try {
    const {name, cpf, dateOfBirthIsString} = req.body
    const {day, month, year } = dateOfBirthIsString.split("/")
    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

const age:number = Date.now() - dateOfBirth.getTime()
const ageYears: number = age / 1000 / 60 / 60 / 24 / 365

if(ageYears <18){
    res.statusCode = 406
    throw new Error("Usuario tem que ter 18 ou mais")
}
    accounts.push({
        name,
        cpf,
        dateOfBirth,
        balance: 0,
        statement: []
    })
    res.status(201).send("Conta criada com sucesso!")
} catch (error) {

    res.send("Erro ao criar a conta")
}
})


app.get("/users/all", (req:Request, res: Response)=>{
try {
    if(!accounts.length){
        res.statusCode = 404
        throw new Error("Nenhuma conta encontrada")
    }
    res.status(200).send(accounts)
} catch (error) {
    console.log(error);
    
    res.send("error.message") 
}



})




















app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});
