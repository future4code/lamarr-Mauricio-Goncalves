import React from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'

export const HomePage =() => {
    const navigate=useNavigate()
   
    return (
        <div>
            <h1>HomePage</h1>
            <button onClick={()=>{MyRoute.goToPageAdmin(navigate)}}>Area Administrativa</button>
            <button onClick={()=>{MyRoute.goToListTripsPage(navigate)}}>Lista de Viagens</button>
            <button onClick={()=>{MyRoute.goToApplicationFormPage(navigate)}}>3</button>
            <button onClick={()=>{MyRoute.goToTripDetailsPage(navigate)}}>4</button>
            <button onClick={()=>{MyRoute.goToCreateTripPage(navigate)}}>5</button>
            <button onClick={()=>{MyRoute.goToLoginPage(navigate)}}>6</button>

        </div>
    )




}