import React from 'react'


export function Etapa3 () {

    return (
        <div>
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>,
        <h3>5. Porque você nao terminou um curso de graduação?</h3>,
        <input></input>
        <h3>6. Você fez algum curso complementar?</h3>,
        <select name='Qual sua escolaridade'>
        <option value={1}>Selecione</option> 
        <option value={2}>Nenhum</option> 
        <option value={3}>Curso profissionalizante</option>
        <option value={4}>Curso técnico.</option>              
             </select>
        </div>   
    )
}