import React, {useState} from "react";
import { TelaPrincipal } from "./components/TelaPrincipal/TelaPrincipal";
import {Matchs} from "./components/Matchs/Matchs"


function App() {
//   const {goMatchs} = props;
//   const [pagina, setPagina] =useState("1")

//   const paginaRenderizada = () => {
//     switch (pagina){
//       case "1":
//         return <TelaPrincipal mudaPagina={mudaPagina}/>
//       case "2":
//         return <Matchs mudaPagina={mudaPagina}/> 
//       default: 
//         return <TelaPrincipal mudaPagina={mudaPagina}/>
//     }}



//   function mudaPagina(p){
//     setPagina(p)
//  }
  return (
    <TelaPrincipal/>
  );
}

export default App;
