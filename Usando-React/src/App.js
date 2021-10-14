import React from 'react';
//usando props e components




const Equipe = (props) => {
    return(
        <div>
          <Sobre nome={props.nome} cargo={props.cargo} idade=   {props.idade}/>

          <Social fb={props.facebook}/>
          <hr/>
        </div>
    )
}

const Sobre = (props) => {
    return(
        <div>
            <h2>Olá sou o(a) {props.nome}</h2>
            <h3>Cargo: {props.cargo}</h3>
            <h4>Idade: {props.idade} anos</h4>
        </div>
    );
}

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>facebook</a>
        </div>
    )
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Elton" cargo="Programador" idade="23" facebook="https://google.com"/>
            <Equipe nome="Everton" cargo="Musicista" idade="27"/>
            <Equipe nome="Evelyn" cargo="Advogada" idade="21"/>

        </div>
    )
}

export default App;