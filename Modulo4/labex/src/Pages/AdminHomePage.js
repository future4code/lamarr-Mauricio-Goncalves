import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../Hooks/useRequestData";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import * as MyRoute from '../router/codinator'
import axios from "axios";
import { BASE_URL } from "../constants/constants";

export function AdminHomePage () {
    useProtectedPage()
    const navigate=useNavigate();


    const [dataAdminPage,isLoadingUser,erroUser] = useRequestData(`${BASE_URL}mauricio-goncalves-lamarr/trips`)
    const adminPage = dataAdminPage&&dataAdminPage.trips.map((item)=>{
        return <div key={item.id}>{item.name}<button onClick={()=>{MyRoute.goToTripDetailsPage(navigate)}}>Aprovar</button><button>Reprovado</button></div>
    })

    return(
    <>
    <h1>AdminHomePage</h1>
    <p>Lista de viagem</p>

    <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
            <button onClick={()=>{MyRoute.goToCreateTripPage(navigate)}}>Criar Viagem</button>
          <button onClick={()=>{MyRoute.goToLoginPage(navigate)}}>Logout</button>
    
    {isLoadingUser&&"...Carregando!"}
        <ul>
            {!isLoadingUser&&dataAdminPage&&adminPage}
        </ul>
        {!isLoadingUser&&!dataAdminPage&&erroUser}
    
    
    </>
    )
}