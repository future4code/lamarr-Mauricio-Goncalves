import React from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'
import {ApplicationScreenContainer, ContainerCard} from './Style'
export const HomePage =() => {
    const navigate=useNavigate()
   
    return (
        <ApplicationScreenContainer>
            <h1>HomePage</h1>
            <button onClick={()=>{MyRoute.goToPageAdmin(navigate)}}>Area Administrativa</button>
            <button onClick={()=>{MyRoute.goToListTripsPage(navigate)}}>Lista de Viagens</button>

        </ApplicationScreenContainer>
    )




}