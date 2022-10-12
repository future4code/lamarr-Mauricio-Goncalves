const tarefas = [
    "Lavar a Louça",
    "Trabalhar",
    "Estudar"
]

const tarefa = process.argv[2]

tarefas.push(tarefa)

console.log(`${tarefa}, Adicionada`)