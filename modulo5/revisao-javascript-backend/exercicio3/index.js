
const verifyLogin = (email, senha) =>{
    if(email.includes("@") && (senha.length >= 6)){
        console.log("login bem-sucedido")
    } else if(
        senha.length < 6 
    ){
        console.log("Senha deve possuir no mínimo 6 caracteres")
      
    } else if(
        !email.includes("@")
    ) {
        console.log("e-mail inválido");
    }
}

verifyLogin("mau@hot.com", "123456");








 const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]






// ### Entrada

// E-mail e senha, ambas do tipo string.

// ### Saída

// Frases de sucesso e erro para cada caso.

// ### Validações

// E-mail deve possuir o caractere especial @ e a senha precisa ter no mínimo 6 caracteres.

// ### Exemplos de implementação básica

// login(”astrodev@labenu.com”, “abc123”) retorna “login bem-sucedido”

// login(”bananinha@gmail.com”, “banana”) retorna “e-mail ou senha incorretos”

// ### Exemplos de validações

// login(”astrodev.labenu.com”, “abc123”) retorna “e-mail inválido”

// login(”bananinha@gmail.com”, “ba”) retorna “senha deve possuir no mínimo 6 caracteres”