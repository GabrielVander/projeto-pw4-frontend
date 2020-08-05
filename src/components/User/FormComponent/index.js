import React from 'react';
import '../style.css';

/* 
Esse componente pode ser um formulario para criar um conta ou para logar numa conta.

Esse componente UserForm foi feito para funcionar assim.. 
Caso ele receber "register" na propriedade quando chamado,
o componente sera construido com um state preenchido com informações para criar um campo de registrar.
Caso ele receber outra coisa 
o componente sera construido com um state preenchido com informações para criar um campo de login.
Fiz isso na tentativa de deixa reutilizavel.
*/

class UserForm extends React.Component{

    constructor(props){
        super(props);
        if(this.props.mode == "register"){
            this.state = {title: "Cadastro de Usuário", action: "registerUser", submitValue: "Cadastrar"}
        }
        else{
            this.state = {title: "Login de Usuário", action: "logUser", submitValue: "Logar"}
        }
     }
        


    render(){
        return(

            <form action = {this.state.action} method = "POST" className = "formForm">
                <h2 className = "formTitle"> {this.state.title} </h2>
    
                <div className = "formRow">
                    <label> E-mail:</label> <input type = "email" placeholder = "Digite seu email" name = "email"/> <br/>
                </div>
    
                <div className = "formRow"> 
                    <label>Senha:</label> <input type = "password" placeholder = "Digite sua senha" name = "password"/> <br/>
                </div>

    
                <input className = "formSubmitButton" type = "submit" value = {this.state.submitValue}/>
               
            </form>
        ) 
    }
    

}

export default UserForm;
