const operacao = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])


let resultado = "resultado: "

switch(operacao) {
    case "add":
    resultado += num1 + num2
    break
    case "sub":
    resultado += num1 - num2
    break
    case "mult":
    resultado += num1 * num2
    break
    case "div":
    resultado += (num1 / num2).toFixed(1)
    break
}


console.log(resultado)