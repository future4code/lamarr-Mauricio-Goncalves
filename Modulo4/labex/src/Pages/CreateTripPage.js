import React from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'
export const CreateTripPage =() => {
    const navigate=useNavigate()
   
    return (
        <div>
            <h1>CreateTripPage</h1>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}