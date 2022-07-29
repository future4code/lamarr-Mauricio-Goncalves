import react, {useEffect, useState}from 'react'
import axios from 'axios'

export const Cadastro = () =>{
    const [nome, setNome] = useState([]);
    const [myName, setMyName] =useState('');
    const [myEmail, setMyEmail] =useState('');
   const atualizaName=(event)=>{
    setMyName(event.target.value)
   }
   const atualizaEmail=(event)=>{
    setMyEmail(event.target.value)
   }
const deletaUsuario = ((id)=> {
    
    axios.delete(endPoint +"/" +id, myHeader)
    .then(()=> {
        getAllUsers()
        alert('Deu certo');
    }).catch(()=>{
        alert("deu ruim")
    })



})

    const compLista=nome.map((item,index)=>{
        return(
            <li key={index}>
            {item.name}<button onClick={(()=>deletaUsuario(item.id))}>X</button>
            </li>
        )
    })
   
    useEffect(()=>{
        getAllUsers()
        deletaUsuario()
    },[])

    const endPoint = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const myHeader = { 
        headers:{Authorization: "mauricio-goncalves-lammar"}
    }
   
    const getAllUsers=()=>{
        axios.get(endPoint, myHeader)
        .then((response)=>{
            console.log(response);
            setNome(response.data);
        }).catch(
            (erro) => {
                console.log(erro.response);
            })
    }

    //post----
    const body={
        "name": myName,
        "email": myEmail
    }
    const postCreateUser=(event)=>{
        event.preventDefault()
        axios.post(endPoint, body, myHeader)
        .then(()=>{
            getAllUsers()
            alert('Deu certo')}
        )
        .catch((erro)=>{
            alert('Vish! Deu ruim')
        })
            
    }


    return (
        
        <>
          <>{compLista}</>
        <button>Trocar de tela</button> <br></br>
        
        <input type='text'
        value={myName}
        onChange={atualizaName}
         placeholder='Nome'/>

        <input type='email'
        value={myEmail}
        onChange={atualizaEmail}
         placeholder='E-mail'/>
        <button onClick={postCreateUser}>Criar Usuario</button>
        
        
        </>




    )
}