import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { TelaPrincipal } from "./TelaPrincipal/TelaPrincipal";
import {Matchs} from "./Matchs/Matchs"

export const Rotas = () =>{

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TelaPrincipal/>}/>
                <Route path="/matchs" element={<Matchs/>}/>
            </Routes>
        </BrowserRouter>
    )
}