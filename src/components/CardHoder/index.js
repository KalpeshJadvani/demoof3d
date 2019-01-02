import React, { Component } from 'react';



class CardHoder extends Component {

    constructor(props){
        super(props)
        this.state={

        };
    }

     componentWillReceiveProps(props){

        console.log(props);

     }

     componentDidMount(){
        console.log("componentDidMount");
     }

    render(){

        return(
        <div> 
            
        </div>);
    }



}

export default CardHoder;
