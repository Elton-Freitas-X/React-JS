import React, { Component } from "react";
import Feed from "./componentsList/Feed";

class TrabListas extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed:[
                {id: 1, username: 'Elton', curtidas:1, comentarios: 0},
                {id: 2, username: 'Everton', curtidas:110, comentarios:24},
                {id: 3, username: 'Evelyn', curtidas:1110, comentarios:224},
                {id: 4, username: 'Lêda', curtidas:11120, comentarios:22224},
            ]
        };
    }


    render(){
        return(
            <div>
                
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} username={item.username}
                        curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })}

            </div>
        )
    }
}

export default TrabListas;