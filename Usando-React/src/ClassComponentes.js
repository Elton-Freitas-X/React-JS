import React, { Component } from 'react'; 

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} 
                cargo={this.props.cargo} 
                idade={this.props.idade}/>

                <Social fb={this.props.facebook}
                    link={this.props.linkedin}
                />
                <hr/>
            </div>
        );
    }
}

class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Funcionou!!</h2>
               <h3>Ola, eu sou o {this.props.nome}</h3>
               <h4>Eu queria ser programador mas sou { this.props.cargo}</h4>
               <h5>{this.props.idade} de anos</h5>
            </div>
        )
        
    }
}

const Social = (props) =>{
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a href={props.link}>Linkedin </a>
        </div>
    );
}

function ClassComponentes(){
    return(
        <div>
            <h1>Conheça nossa euqipe:</h1>
            <Equipe nome="Elton" cargo= "Musicista" idade="23"/>

            <Equipe nome="Everton" cargo= "Vendedor de miçanga" idade="27" facebook="http://www.google.com.br" linkedin="http://www.google.com.br"/>
        </div>
    )
}

export default ClassComponentes;