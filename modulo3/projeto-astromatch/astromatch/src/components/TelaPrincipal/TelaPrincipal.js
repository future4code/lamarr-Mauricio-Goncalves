import React, { useState, useEffect } from "react"
import axios from "axios"
import { Buttons, ContainerPrincipal, Imagem, ContainerButtons, ContaionerBio, Butao, ContainerMatch } from "./Styled"
import Coracao from './img/coracao.png'
import Dislike from './img/dislike.png'
import MeusMatchs from './img/meumatchs.png'
import Lixeira from './img/lixeira.png'
import { useNavigate } from "react-router-dom";


export const TelaPrincipal = () => {
    const [persons, setPersons] = useState([])
    const navigate = useNavigate();
    
    
    useEffect(() => {
        getUsers();
    }, []);
  

  const DesLike = (id, escolha) => {
    escolhaMatches(id,escolha);
    getUsers();
  }

  const Like = (id, escolha) => {
    escolhaMatches(id,escolha);
    getUsers();
  }


    const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Mauricio/person'


    const getUsers = () => {
        axios.get(url)
            .then((response) => {
                setPersons([response.data.profile])
            }).catch((err) => {
                console.log(err);
            })
    }


    const escolhaMatches = (id, escolha) => {
        const body = {
            id: id,
            choice: escolha
        };
        axios.post(
           "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Mauricio/choose-person",
           body
        )
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    const resetarMatches = () => {
        axios.put(
            "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Mauricio/clear"
        ) 
        .then((response)=>{
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    return (
        <>
        <Butao onClick={() => resetarMatches()}> <img src={Lixeira} alt="" /></Butao>
            {persons.map((item, index) => {
                return (
                    
                    <ContainerPrincipal>
                        
                        <ContainerMatch>
                        <h1>Astromatch</h1>
                        <Butao onClick={() => navigate("/Matchs")} > <img src={MeusMatchs} alt="" /></Butao></ContainerMatch>
                        <Imagem src={item.photo} />
                        <ContaionerBio>
                          <p>{item.name + ", "}  
                             {item.age} </p> 
                          <p>{item.bio}</p> </ContaionerBio>
                        <ContainerButtons>
                            <Buttons
                            onClick={() => DesLike(item.id,false)}
                            ><img src={Dislike} /></Buttons>
                            <Buttons
                             onClick={() => Like(item.id, true)}> 
                             <img src={Coracao} alt="" /></Buttons>
                             </ContainerButtons>
                    </ContainerPrincipal>
                )
            })}
        </>
    )
}