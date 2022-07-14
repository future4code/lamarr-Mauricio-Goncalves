import React from 'react';

export const Filtro = () => {
    return (   
        <div>
            <input type={"number"} placeholder="Valor minimo">Valor minimo</input>;
            <input type={"number"} placeholder="Valor maximo">Valor maximo</input>;
            <input type={"number"} placeholder="Buscar por nome">Buscar por nome</input>;
        </div>

    )
}