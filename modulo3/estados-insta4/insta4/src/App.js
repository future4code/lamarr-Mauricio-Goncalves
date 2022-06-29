import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={'paulinha'}
            fotoUsuario={'https://picsum.photos/10/10'}
            fotoPost={'https://picsum.photos/200/150'}
          />
          <Post
            nomeUsuario={'Juliana'}
            fotoUsuario={'https://picsum.photos/20/20'}
            fotoPost={'https://picsum.photos/100/120'}
          />
          <Post
            nomeUsuario={'Fernanda'}
            fotoUsuario={'https://picsum.photos/30/30'}
            fotoPost={'https://picsum.photos/300/450'}
          />
  </div>
)

}


export default App;
