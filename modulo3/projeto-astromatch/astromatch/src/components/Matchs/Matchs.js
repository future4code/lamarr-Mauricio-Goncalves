import React, {useState, useEffect} from "react"
import axios from "axios";
import {ContainerPrincipal, Imagem, Matches,Li, Astrodiv} from './Styled'
import Foto from './img/home.png'
import { useNavigate } from "react-router-dom";

export const Matchs =() => {

    const [matches, setMatches] = useState([]);
    const navigate = useNavigate();
    useEffect(()=> {
        meusMatches();
    });


    const meusMatches = () =>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:Mauricio/matches")
        .then((response) =>{
            setMatches(response.data.matches)
        })
        .catch((err) =>{
            console.log(err);
        });
    };
    return (
        <ContainerPrincipal>
           <Astrodiv>
                <button onClick={() => navigate("/")}><img src={Foto} /></button>
                <h1>AstroMatch</h1>
                </Astrodiv>
    {matches.map((pessoa) => {
        return (
            <Matches>
            <Li key={pessoa.id}>
                <Imagem src={pessoa.photo} alt={pessoa.photo_alt} />
                <p>{pessoa.name}</p>
            </Li>
            </Matches>)
        })}
    </ContainerPrincipal>

    )
}