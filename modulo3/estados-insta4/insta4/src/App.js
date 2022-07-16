import React, { useState } from 'react';
import Post from './components/Post/Post';


function App() {
 
  const [inputPostagem, setInputPostagem] = useState("")
  const [inputFoto, setInputFoto]= useState("")
  const [inputTexto, setInputTexto]= useState("")
  const [postagem, setPostagem] = useState([

    {nomeUsuario:'paulinha',
    fotoUsuario: 'https://picsum.photos/10/10',
    fotoPost: 'https://picsum.photos/200/150'},
  
    {nomeUsuario:'Fernanda',
    fotoUsuario: 'https://picsum.photos/20/20',
    fotoPost: 'https://picsum.photos/100/110'},
  
    {nomeUsuario:'Juliana',
    fotoUsuario: 'https://picsum.photos/30/30',
    fotoPost: 'https://picsum.photos/300/151'},



  ])

  const handleInputPostagem = (e) => {
    setInputPostagem(e.target.value)
  }
  const handleInputFoto = (e) => {
    setInputFoto(e.target.value)
  }
  const handleInputTexto = (e) => {
    setInputTexto(e.target.value)
  }
  const addPostagem = (e) => {
    e.preventDefault();

    const novaPostagem = {nomeUsuario: inputPostagem, fotoUsuario: inputFoto, fotoPost: inputTexto}
    const novaListaPostagem = [...postagem, novaPostagem]
    setPostagem(novaListaPostagem)
  }


  let listadePostagem = postagem.map((post,index) => {
    return (
      <Post key={index} nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}>
      </Post>
    )
  });
  return (
   <div>
    <form>
      <label>Nova Postagem</label>
      <input
        placeholder='Insira seu Nome'
        value={inputPostagem}
        onChange={handleInputPostagem}/>
         <input
        placeholder='Insira sua Foto'
        value={inputFoto}
        onChange={handleInputFoto}/>
         <input
        placeholder='Insira o Texto'
        value={inputTexto}
        onChange={handleInputTexto}/>
        <button onClick={addPostagem}>Adicionar</button>


    </form>
    {listadePostagem}
    {console.log(listadePostagem)}
   </div>


  )
  

}


export default App;
