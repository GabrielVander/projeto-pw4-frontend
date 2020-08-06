import React from 'react';
import '../style.css';

//Esse componente cria uma caixa para o usuário digitar o codigo enviado para seu email.. confirmando assim a existencia do seu email.

function EmailConfirmation() {
	return (
		<form action="verifyUserEmail" className="emailForm">


			<h2> Digite o código enviado por E-mail:</h2> <br/>
			<input type="number" placeholder="Digite o código" name="emailCode" style={{fontSize: '30pt'}}/> <br/>


			<input className="emailSubmitButton" type="submit" value="Enviar"/>

		</form>
	);
}

export default EmailConfirmation;
