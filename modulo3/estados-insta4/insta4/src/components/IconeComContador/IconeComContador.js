import React from 'react'
import {Div} from'./style'




export function IconeComContador(props) {
	return <Div>
		< img alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</Div>
}
