import express, {Request, Response} from "express"
import * as allTypes from "./type";
import { products } from "./data";
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())
//exe1
app.get("/test", (req: Request, res: Response)=>{

    res.send("Api rodando na porta 3003")


})
//exe4 e 8
app.get("/products", (req: Request, res: Response)=>{
    const name= req.body.name
    const price= req.body.price
 const newProduct:allTypes.Data = {
      id: Date.now().toString(),
      name,
      price,
    }
    products.push(newProduct)

    res.send(products)

})

//exe5


app.get("/products", (req: Request, res:Response)=>{
    res.send(products)


})


//exe6


app.put("/products/:id", (req: Request, res:Response)=>{
    const id = req.params.id
    const newPrice = req.body.price
    
    let isProductFound = false

    for (let i = 0; i < products.length; i++) {
      if (products[i].id === id) {
        products[i].price = newPrice
        isProductFound = true
      }
    }


res.send(products)


})


//exe7

app.delete("/products/:id",(req: Request, res: Response)=>{
    const id = req.params.id


    let isProductFound = false

    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products.splice(i, 1)
            isProductFound = true
        }
    }
    res.send(products)
})







app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});