import React, { Component } from "react";

class TrabFormulario extends Component{

    constructor(props){
        super(props)
        this.state = {
            email: '',
            senha: '',
            sexo: 'Masculino'
        }

        this.trocaEmail = this.trocaEmail.bind(this)
    }

    trocaEmail(event){
        let valorDigitado = event.target.value;
        this.setState({email: valorDigitado});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email: 
                <input type='email' name='email' value={this.state.email} 
                    onChange={this.trocaEmail} /> <br />
                Senha: 
                <input type='password' name='senha' value={this.state.senha}
                    onChange={(e) => this.setState({senha: e.target.value})} /> <br />

                Sexo:
                <select name='sexo' value={this.state.sexo} 
                    onChange={(e) => this.setState({sexo: e.target.value})}>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                </select>


                <div>
                    <h3>Email :{this.state.email}</h3>
                    <h3>Senha :{this.state.senha}</h3>
                    <h3>Sexo :{this.state.sexo}</h3>
                </div>
            </div>
        )
    }
}

export default TrabFormulario;