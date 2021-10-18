import React, {Component} from "react";
import Membro from "./components/membros";


class CiclodeVida extends Component {

    constructor(props){
        super(props);
        this.state = { 
            hora: '00:00:00'
         };
    }

    componentDidMount(){

        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString() })
        }, 1000)

    }

    componentDidUpdate(){
        console.log('atualizou!!')
    }

    //shouldComponentUpdate(){
    //}

    render(){
        return(
            <div>
               <h1>{this.state.hora}</h1>

               <Membro  nome="Visistante"/>
            </div>
        );
    }
}

export default CiclodeVida;