import React, {useState} from 'react'
import {Div1, Img1, Img2, Section2} from './style'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){


  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [comentario, setComentario] = useState("")

  const mudaComentario = (event) => {
    setComentario(event.targer.value)

  }

  const onClickCurtida = () => {
     setCurtido(!curtido)
     if(!curtido){
      setnumeroCurtidas(numeroCurtidas+1)
     }
     else{
      setnumeroCurtidas(numeroCurtidas-1)
     }

    console.log('Curtiu!')
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario valor={comentario} onChangeComentario={mudaComentario} aoEnviar={aoEnviarComentario}/>
    }
    
    console.log(comentando)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
  }
 
  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto

    } else {
      iconeCurtida = iconeCoracaoBranco 
    }
    

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario}/>
    }

  return(
    <Div1>
      <section>
        <Img1 src={props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{props.nomeUsuario}</p>
      </section>

      <Img2 src={props.fotoPost} alt={'Imagem do post'}/>

      <Section2>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </Section2>
      {componenteComentario}
    </Div1>
  )
}


export default Post