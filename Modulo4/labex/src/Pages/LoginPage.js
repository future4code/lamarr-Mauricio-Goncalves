import React from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'

export const LoginPage =() => {
    const navigate=useNavigate()
    
    return (
        <div>
            <h1>LoginPage</h1>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </div>
    )
}