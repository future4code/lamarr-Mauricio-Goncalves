import React, { useState, useEffect } from "react"
import axios from "axios"
import { Buttons, ContainerPrincipal, Imagem, ContainerButtons, ContaionerBio, Butao, ContainerMatch } from "./Styled"



export const TelaPrincipal = () => {
    const [persons, setPersons] = useState([])


    useEffect(() => {
        getUsers();
    }, []);
    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Mauricio-Goncalves-Lammar/person'


    const getUsers = () => {
        axios.get(url)
            .then((response) => {
                setPersons([response.data.profile])
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <>
            {persons.map((item) => {
                return (
                    <ContainerPrincipal>
                        <ContainerMatch>
                        <h1>Astromatch</h1>
                        <Butao> <img src="https://cdn-icons-png.flaticon.com/128/3079/3079258.png" alt="" /></Butao></ContainerMatch>
                        <Imagem src={item.photo} alt="" />
                        <ContaionerBio>
                          <p>{item.name + ", "}  
                             {item.age} </p> 
                          <p>{item.bio}</p> </ContaionerBio>
                        <ContainerButtons>
                            <Buttons><img src="https://cdn-icons-png.flaticon.com/128/458/458594.png" /></Buttons>
                            <Buttons> <img src="https://cdn-icons.flaticon.com/png/128/3669/premium/3669698.png?token=exp=1659656029~hmac=317d1243cb3343979ed0af87787c148a" alt="" /></Buttons></ContainerButtons>
                    </ContainerPrincipal>
                )
            })}
        </>
    )
}