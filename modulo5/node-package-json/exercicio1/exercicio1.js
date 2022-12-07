"Olá, (Nome)! Você tem (sua idade) anos."

const nome = process.argv[2]
const idade = Number(process.argv[3])
const idadeFutura = idade + 7

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeFutura}`)