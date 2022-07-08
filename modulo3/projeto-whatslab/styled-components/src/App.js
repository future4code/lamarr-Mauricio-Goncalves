
import { useState } from 'react'
import styled from 'styled-components'
import Logo from './img/labenu.jpg'


const Header = styled.header`
background-color: white;
display: flex;
align-items: center;
justify-content: center;
padding: 0;
img{
  width: 50px;
  height: 50px;
}
h1{
  font-size: 30px;
  color: black;
}
`
const Coluna1 = styled.section`
background-color: orange;
height: 88vh;
width: 10vw;
float: left;
`
const Coluna2 = styled.section`
background-color: orange;
height: 88vh;
width: 10vw;
float: right;
`
const Input = styled.section`
display: flex;
margin-top: 40%;
label{
  margin-right: 10px;
}
input{
  margin-left: 10px;
  margin-right: 10px;
}


`

const Footer = styled.footer`
 background-color: gray;
 color: black;
 padding: 0;
 width: 100%;
 display: flex;
 padding: 0 10px;
 justify-content: center;
`

function App() {
  const [inputNome, setInputNome] = useState("")
  const [inputMsg, setInputMsg] = useState("")
  const [usuarios, setUsuario] = useState([
    {nome: "",
     mensagem: "" }
  ])
 
  const handleInputNome = (e) => {
    setInputNome(e.target.value)
  }
  const handleInputMsg = (e) => {
    setInputMsg(e.target.value)
  }

  const addMensagem = () => {
    const novaMensagem = {nome: inputNome, mensagem: inputMsg}
    const novaListaMensagem =[...usuarios,novaMensagem]
    setUsuario(novaListaMensagem)
  }
 
  const listaDeUsuario = usuarios.map((usuario, index) => {
    return (
      <div key={index}>
       <b> {usuario.nome}</b>
        <> </>
        {usuario.mensagem}
      </div>
    )
  })
 
  return (
    
    <div>
           
       <Header> 
      <section>
        <img src={Logo} alt="logo"/>
      </section>
      <h1>LapZap</h1>
       </Header>
       <body>
        <Coluna1></Coluna1>
        <Coluna2></Coluna2>
       </body>
        <Input>
          <label>
            Remetente:
            <input placeholder='Insira um nome'
             value={inputNome} 
             type="texto" 
             name="remetente"
             onChange={handleInputNome}/>
            Msg:
            <input 
            placeholder='Insira uma mensagem'
            value={inputMsg}
            type="texto" 
            name="remetente" 
            size="50"
            onChange={handleInputMsg}/>
          </label>
          <button onClick={addMensagem}>Enviar Mensagem</button>
        </Input>
            {listaDeUsuario}
       <Footer>Copyright C 2022 Labenu All rights reserved</Footer>
    </div>
  );
}

export default App;
