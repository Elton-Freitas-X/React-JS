import React, {Component} from "react";
import Membro from "./components/membros";


class CiclodeVida extends Component {

    constructor(props){
        super(props);
        this.state = { 
            hora: '00:00:00',
            data: '00/00/0000'
         };
    }

    componentDidMount(){

        setInterval(() => {
            this.setState({hora: new Date().toLocaleTimeString(),
            data: new Date().toLocaleDateString() })
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
               <h2>{this.state.data}</h2>

               <Membro  nome="Visistante"/>
            </div>
        );
    }
}

export default CiclodeVida;