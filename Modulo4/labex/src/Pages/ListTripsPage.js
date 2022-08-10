import React, {useState} from "react";
import {useNavigate} from "react-router-dom"
import axios from 'axios'
import * as MyRoute from '../router/codinator'

export const ListTripsPage =() => {
    const [trips, setTrips] = useState([])
    const navigate=useNavigate()
    

    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:mauricio-goncalves-lamarr/trips'


    const getUsers = () => {
        axios.get(url)
            .then((response) => {
                console.log(response)
            }).catch((err) => {
                console.log(err);
            })
    }





    return (
        <>
            <h1>Lista de viagems</h1>
           <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
        </>
    )



}