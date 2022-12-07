enum ROLE {
    ADMIN = "admin",
    USER = "user"
  }



type usuarios={
    name: string,
    email: string,
    role: ROLE,
}


const listaUsuarios: usuarios[]=[
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]; 


const users =(lista:usuarios[]): string[] =>{
    const filters:string[] =lista.filter((array)=>
         array.role === ROLE.ADMIN).map((array)=>array.email);
         return filters;
    }
console.table(users(listaUsuarios))