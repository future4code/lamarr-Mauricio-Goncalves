import React from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'
export const AdminHomePage =() => {
    const navigate=useNavigate()
    
    return (
        <div>
            <h1>AdminHomeh1age</h1>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}