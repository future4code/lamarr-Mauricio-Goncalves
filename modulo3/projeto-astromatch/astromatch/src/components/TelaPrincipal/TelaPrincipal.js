import React, {useState, useEffect} from "react"
import axios from "axios"
import { ContainerPrincipal } from "./Styled"



export const TelaPrincipal = ()=> {
   const[persons, setPersons] = useState([])
   
   
   useEffect(() => {
    getUsers();
  }, []);
   const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Mauricio-Goncalves-Lammar/person'             
       

const getUsers=() =>{
    axios.get(url)
    .then((response)=>{
        setPersons([response.data.profile])
    }).catch((err)=>{
        console.log(err);
    })
}

   return(
    <>
        {persons.map((item)=>{
            return(
                <ContainerPrincipal>
                    <img src={item.photo} alt="" />
                    {item.name}
                    {item.age}
                </ContainerPrincipal>
             )
        })}
         










    </>
   ) 
   }