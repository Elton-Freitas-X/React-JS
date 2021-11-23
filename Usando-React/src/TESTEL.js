import React, {Component} from 'react'

class TESTEL extends Component {

    constructor(props){
        super(props)
        this.state = {
            nome: '',
            email: '',
            senha: '',
        }
        this.cadastrar = this.cadastrar.bind(this)
    }
   

    cadastrar(event){

        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                        <input type="name" value={this.state.name}
                         onChange= { (e)=> this.setState({nome: e.target.value})}/> 
                    <br />

                    <label>Senha: </label>
                    <input  type="password" value={this.state.senha}
                        onChange= { (e)=> this.setState({senha: e.target.value})}/>
                    <br />

                    <label>Email: </label>
                    <input type="email" value={this.state.email}/>
                    <br />
                    <button type="submit">Cadastrar</button>
                </form>
            </div>
        )
    }
}
  
export default TESTEL;