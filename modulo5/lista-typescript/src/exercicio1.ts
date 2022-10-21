const requireName =((name:string, date:string): string => {
const [dia, mes, ano] = date.split("/")
const frase: string = `"Olá me chamo ${name}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}"`
return frase
})

console.log(requireName("Mauricio", "03/12/1989"))