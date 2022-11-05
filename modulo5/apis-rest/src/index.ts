import express, {Request, Response} from "express"
import {users} from "./data"
import cors from 'cors'
import { User, USER_TYPE } from "./type"
const app = express()

app.use(express.json())

app.use(cors())


//exe1

app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try{
    if(!users.length){
       res.status(401).send("Não tem users.")
    }

    res.status(201).send(users)
}catch (error:any) {
    res.status(errorCode).send(error.message)
}
})





//exe2

app.get("/users/type", (req:Request, res: Response)=>{
    let errorCode = 400
    
    try {
        const type = req.query.type as string
        if(type in USER_TYPE){
            errorCode= 422
            throw new Error ('Falta passar o tipo como parametro')
        }
        const searchType = users.filter((user)=>{
            return user.type.toUpperCase() === type.toUpperCase()
        })
        res.status(200).send(searchType) 
    }catch (error:any) {
        res.status(errorCode).send(error.message)
    }

})











//exe3
app.get("/users", (req:Request, res: Response)=>{
    let errorCode = 400
    
    try {
        const userName = req.query.name as string
        if(!userName){
            errorCode= 422
            throw new Error ('Falta passar o nome como parametro')
        }
        const userSearched = users.filter((user)=>{
            return user.name === userName
        })
        if(!userSearched){
            errorCode = 404
            throw new Error("Usuario nao encontrado")
        }
        res.status(200).send(userSearched) 
    }catch (error:any) {
        res.status(errorCode).send(error.message)
    }

})












//exe4

app.post('/users', (req:Request, res: Response)=>{
    let errorCode = 400
try {
    const {userName, userEmail, userType, userAge} = req.body

    if(!userName || !userEmail || !userType || !userAge){
        errorCode = 422
        throw new Error("Falta passar parametros , nome, email, tipo, idade");
    }
if(userType.toUpperCase() !=="ADMIN" && userType.toUpperCase() !=="NORMAL"){
    errorCode=402
    throw new Error("Insira um tipo de usuário válido, ADMIN ou NORMAL ");
}
const newUser : User = {
    id: Math.random(),
    name: userName,
    email: userEmail,
    type: userType.toUpperCase(),
    age: userAge
}
users.push(newUser)
res.status(201).send(users)
}catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})







app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});