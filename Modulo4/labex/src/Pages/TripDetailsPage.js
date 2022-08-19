import React from "react";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../Hooks/useRequestData";
import * as MyRoute from '../router/codinator'
export const TripDetailsPage =() => {
    const navigate=useNavigate()
    const [dataUser,isLoaddingUser,erroUser]=useRequestData(`${BASE_URL}trips/id`)


    



    return (
        <div>
            <h1>TripDetailsPage</h1>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}