import React from 'react';
import './CardPequeno.css'

 function CardPequeno(props) {
    return (
           <div className='card-pequeno'>
            <img src={props.imagem}/>
            <h4>{props.email}</h4>
            <p>{props.email2}</p>
            <h4 className='p-endereco'>{props.endereco}</h4>
            <p>{props.endereco2}</p>
           </div> 
        

    )
}

export default CardPequeno;