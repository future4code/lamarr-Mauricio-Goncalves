import React, {useState, useEffect} from "react"
import axios from "axios";
import { TelaPrincipal } from "../TelaPrincipal/TelaPrincipal";
import {ContainerPrincipal} from './Styled'


export const Matchs =(props) => {
    const {goMatchs} = props;
    const [matches, setMatches] = useState([]);
    
    useEffect(()=> {
        meusMatches();
    });


    const meusMatches = () =>{
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Mauricio/matches")
        .then((response) =>{
            setMatches(response.data.matches)
        })
        .catch((err) =>{
            console.log(err);
        });
    };
    return (
        <ContainerPrincipal>
           
                <h1>AstroMatch</h1>
                <button>Home</button>
                
    {matches.map((pessoa) => {
        return (
            <div>
            <li key={pessoa.id}>
                <img src={pessoa.photo} alt={pessoa.photo_alt} />
                <p>{pessoa.name}</p>
            </li>
            <button onClick={goMatchs}>Home</button>
            </div>)
        })}
    </ContainerPrincipal>

    )
}