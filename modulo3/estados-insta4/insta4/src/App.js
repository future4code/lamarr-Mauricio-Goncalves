import React from 'react';
import Post from './components/Post/Post';


function App() {
  const postagens = [
    
      {nomeUsuario:'paulinha',
      fotoUsuario: 'https://picsum.photos/10/10',
      fotoPost: 'https://picsum.photos/200/150'},

      {nomeUsuario:'Fernanda',
      fotoUsuario: 'https://picsum.photos/20/20',
      fotoPost: 'https://picsum.photos/100/110'},

      {nomeUsuario:'Juliana',
      fotoUsuario: 'https://picsum.photos/30/30',
      fotoPost: 'https://picsum.photos/300/151'},
  
    
  ]
  
  let postagem = postagens.map((post,index) => {
    return (
      <Post key={index} nomeUsuario={post.nomeUsuario}
      fotoUsuario={post.fotoUsuario}
      fotoPost={post.fotoPost}>
      </Post>
    )
  });
  return (
   <div>
    {postagem}
    {console.log(postagem)}
   </div>


  )
  

}


export default App;
