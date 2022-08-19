import React from "react";
import {useNavigate} from "react-router-dom"
import { useRequestData } from "../Hooks/useRequestData";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import * as MyRoute from '../router/codinator'
import {ContainerTrips,ContainerCard} from './Style'
export const AdminHomePage =() => {
    useProtectedPage();
    const navigate=useNavigate()
   

//     // // useEffect(() => {
//     // //     const token = localStorage.getItem("token");
//     // //     axios.get(`${BASE_URL}trip`,
//     // //     {
//     // //         headers: {
//     // //         auth: token
//     // //     }
//     // }).then((response)=>{
//     //     console.log(response.data)
//     // }).catch((error)=>{
//     //     console.log("Deu erro: ", error.response)
//     // })
// },[]);

    
    return (
        <div>
            <h1>AdminHomeh1age</h1>
            <button onClick={()=>{MyRoute.goToBack(navigate)}}>voltar</button>
            <button onClick={()=>{MyRoute.goToCreateTripPage(navigate)}}>Criar Viagem</button>
            <button onClick={()=>{MyRoute.goToLoginPage(navigate)}}>Logout</button>
           
        </div>
    )
}