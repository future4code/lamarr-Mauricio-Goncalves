import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../constants/constants";
import {ContainerTrips,ContainerCard} from './Style'


export const ListTripsPage =() => {
    const navigate=useNavigate()
    const token = localStorage.removeItem("token");
    const [dataUser,isLoaddingUser,erroUser]=useRequestData(`${BASE_URL}mauricio-goncalves-lamarr/trips`)

    const user=dataUser&&dataUser.trips.map((trip)=>{
        return<ContainerCard key={trip.id}><b>Nome:</b> {trip.name}<br></br>
                 <p > Planeta {trip.planet}</p>
                 <p > Data: {trip.date}</p>
                 <p > Descrição:{trip.description}</p>
                 <p > Duração: {trip.durationInDays} Dias</p>
                 <button onClick={()=>{MyRoute.goToApplicationFormPage(navigate)}}>Inscrever-se</button>
                 </ContainerCard>
        })
    return (
        <ContainerTrips>
        <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
     <h1>Lista de viagems</h1>
         {isLoaddingUser&&"...Carregando!!! ...."}
        <ul>
        {!isLoaddingUser&&dataUser&&user}
        </ul>
        {!isLoaddingUser&&!dataUser&&erroUser}
        </ContainerTrips>
    )
}































// export const ListTripsPage =()=>{
//     const navigate=useNavigate();
//     const [listTrips, setListTrips] =useState([]);
   
//     useEffect(()=>{
//         getTrips()
//     },[navigate])


//         const getTrips = ()=>{axios.get(`${BASE_URL}`).then((response)=>{
//                     setListTrips([response.data.trips])
//                     console.log(response.data.trips);
//                 }).catch((error)=>{
//                     console.log(error)  })}
    

//     listTrips.map((trip)=>{
//         return(<h1>{trip.planet}</h1>)

//     })                
//   }




























