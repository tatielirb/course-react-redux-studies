import React from 'react'

let isLegal = true;

export default (props) =>  
// propriedades para componentes
	<div>
		<h1>{props.valor}</h1>
		<h1>{1 + 1}</h1>
		<h1>Legal? {isLegal ? 'Sim' : 'Não'}</h1>
		<h1>{Math.random()}</h1>
	</div>


// export default () =>  <h1>Primeiro componente arrow (Arrow)!</h1>

// export default () => <div><h1>Primeiro componente arrow com div (Arrow)!</h1></div> 

// export default primeiro () {
// 	return <h1>Componente baseado em uma função</h1>
// }

// function primeiro () {
// 	return <h1>Componente baseado em uma função</h1>
// }

// export default primeiro