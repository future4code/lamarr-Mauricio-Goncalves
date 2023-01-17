import * as userBusiness from '../business/userBusiness'
import { Request, Response } from "express";



export class FindController {
async get(req: Request, res: Response) : Promise<void>  {	
        try {

            const users = await new userBusiness().get();

            res.send(users).status(200);

        } catch (error:any) {
            res.send({ message: error.message }).status(error.status);
        }
    }
}