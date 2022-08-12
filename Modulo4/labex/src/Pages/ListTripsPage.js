import React, { useState,useEffect } from "react";
import {useNavigate} from "react-router-dom"
import * as MyRoute from '../router/codinator'
import { useRequestData } from "../Hooks/useRequestData";
import { BASE_URL } from "../constants/constants";



export const ListTripsPage =() => {
    const navigate=useNavigate()
    const [dataUser,isLoaddingUser,erroUser]=useRequestData(`${BASE_URL}trips`)

    const user=dataUser&&dataUser.trips.map((trip)=>{
        return<li>{trip.name}</li>
        })
    return (
        <>
     <h1>Lista de viagems</h1>
         {isLoaddingUser&&"...Carregando!!! ...."}
        <ul>
        {!isLoaddingUser&&dataUser&&user}
        </ul>
        {!isLoaddingUser&&!dataUser&&erroUser}
        <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </>
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




























