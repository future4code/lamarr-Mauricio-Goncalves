import React from 'react'

export function Etapa1 () {

    return (
        <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>,
        <h3>1. Qual seu Nome?</h3>,
        <input></input>
        <h3>2. Qual sua idade?</h3>,
        <input></input>
        <h3>3. Qual seu email</h3>,
        <input></input>
        <h3>4. Qual sua escolaridade</h3>,
        <select name='Qual sua escolaridade'>
        <option value={1}>Selecione</option> 
        <option value={2}>Ensino médio incompleto.</option> 
        <option value={3}>Ensino médio completo.</option>
        <option value={4}>Ensino superior incompleto.</option> 
        <option value={5}>Ensino superior completo.</option>                
             </select>
        </div>   
    )
}