import React from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'
export const TripDetailsPage =() => {
    const navigate=useNavigate()
    
    return (
        <div>
            <h1>TripDetailsPage</h1>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}