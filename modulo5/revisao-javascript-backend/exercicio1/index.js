// const celcius = 35
// const fah = celcius * 9/5 +32
// const kelvin = celcius + 273.15
// console.log("35° é equivalente a",fah,"F"); 
// console.log("35° é equivalente a",kelvin,"K"); 


const converteCelsius = ( celcius) =>{
    if (typeof celcius === "number"){
        return (`${celcius}° Celsius é equivalente a ${celcius + 273.15} Kelvin.`)
    }
    if (typeof celcius === "number"){
        return (`${celcius}° Celsius é equivalente a ${celcius * 9/5 +32} Fahrenheit.`)
    }
    return  (`Erro. Parâmetro inválido. ${celcius}`)
}
console.log (converteCelsius(5))


// ## Conversor de temperatura

// Crie um conversor de temperaturas para as escalas em Fahrenheit e Kelvin. 

// ### Entrada

// O valor numérico em grau Celsius e uma string. “F” para Fahrenheit e “K” para Kelvin.

// ### Saída

// Saída: uma frase correspondente.

// ### Validações

// Depois de finalizar a implementação básica, trate os valores de entrada. O primeiro parâmetro deve ser sempre um número e o segundo uma string “F” ou “K” maiúsculas.

// ### Exemplos de implementação básica

// converteCelsius(30, “F”) retorna “30° Celsius é equivalente a 86° Farenheit.”

// converteCelsius(30, “K”) retorna “30° Celsius é equivalente a 303.15 Kelvin.”****

// ### Exemplos de validações

// converteCelsius(”trinta”, “F”) retorna “Erro. Parâmetro inválido (’nome do parâmetro’).”

// converteCelsius(30, “G”) retorna “Erro. Parâmetro inválido (’nome do parâmetro’).”

// converteCelsius(30, “k”) retorna “Erro. Parâmetro inválido (’nome do parâmetro’).”