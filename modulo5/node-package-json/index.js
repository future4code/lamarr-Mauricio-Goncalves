
//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

//"Olá, (Nome)! Você tem (sua idade) anos."

// const nome = process.argv[2]
// const idade = Number(process.argv[3])
// const idadeFutura = idade + 7

// console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`)


// const operacao = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])


// let resultado = "resultado: "

// switch(operacao) {
//     case "add":
//     resultado += num1 + num2
//     break
//     case "sub":
//     resultado += num1 - num2
//     break
//     case "mult":
//     resultado += num1 * num2
//     break
//     case "div":
//     resultado += (num1 / num2).toFixed(1)
//     break
// }


// console.log(resultado)



const tarefas = [
    "Lavar a Louça",
    "Trabalhar",
    "Estudar"
]

const tarefa = process.argv[2]

tarefas.push(tarefa)

console.log(`${tarefa}, Adicionada`)