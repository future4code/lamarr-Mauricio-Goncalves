
import Logo from './img/labenu.jpg'
import {Pai, AreaLaranja, Cabecalho, AreaMensagem, Rodape, Card} from "./style"; 
import { useState } from 'react'



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

  const addMensagem = (e) => {
    e.preventDefault(e);
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
    <Pai>
      <Cabecalho><img src={Logo} alt="Labenu"/><h1>LabZap</h1></Cabecalho>
      <AreaLaranja/>
        <AreaMensagem>
          <form>

          <div>{listaDeUsuario}</div>
          <label>
            <input placeholder='Insira um nome'
             value={inputNome} 
             type="texto" 
             name="remetente"
             onChange={handleInputNome}/>
            Msg:
            <input 
            placeholder='Insira uma mensagem'
            value={inputMsg}
            id="mensagem"
            type="texto" 
            name="remetente" 
            size="50"
            onChange={handleInputMsg}/>
          </label>
          <button onClick={addMensagem}>Enviar Mensagem</button>
          </form>
        </AreaMensagem>
      <AreaLaranja/>
      <Rodape>Copyright © 2022 Labenu All rights reserved. R. Pais Leme, 215, Conjunto 820 Pinheiros. CEP 05424-150 </Rodape>
    </Pai>
  );
}

export default App;
