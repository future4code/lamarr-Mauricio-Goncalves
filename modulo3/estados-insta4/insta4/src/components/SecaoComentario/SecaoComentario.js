import React from 'react'
import {Div2, Input} from './style'


export function SecaoComentario(props) {
	
	return (
		<Div2 className='CommentContainer'>
			<Input className='InputComentario'
				placeholder={'Comentário'}
				value={props.valor}
				onChange={props.onChangeComentario}
			/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</Div2>
	)
}