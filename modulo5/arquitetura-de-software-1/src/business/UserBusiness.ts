
import { user } from "../types/user";
import * as UserDatabase from '../data/UserDatabase'

export class UserBusiness  {
   
    async createUser(user): Promise<void>{
    try {
      
        
        if(!user.name || !user.email || !user.password) {
            throw new Error("Por favor preencha o formulario")
        }
        if(user.email.indexOf("@")=== -1){
            throw new Error("Coloque um email valido")
        }
        if(user.password.lenght < 6){
            throw new Error("Password minimo 6 caracteres")
        }
        const id: string = Date.now().toString()
        
        const userDatabase = new UserDatabase()
        await new userDatabase().createUser(id, user.email, user.name, user.password);

    } catch (error:any) {
     throw new Error(error.message)
        


    }
}

}
