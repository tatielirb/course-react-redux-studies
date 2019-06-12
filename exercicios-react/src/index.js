import React from 'react'
import ReactDom from 'react-dom'
import PrimeiroComponente from './componentes/PrimeiroComponente.jsx'

const elemento = document.getElementById('root');


ReactDom.render(
	<div>
		<PrimeiroComponente valor="Boa noite Brazil"/>
	</div>	
 , elemento);

// ReactDom.render(
// 	<div>
// 		<PrimeiroComponente/>
// 	</div>	
//  , elemento);
 
 




// ReactDom.render('Ola', elemento)