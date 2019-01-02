import React, { Component } from 'react';

import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; 
import { setCartData } from './components/actions';
import plusButton from './components/Buttons/plus.svg';
import closeButton from './components/Buttons/close.svg';
import CardHoder from './components/CardHoder';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
       showCreatCart: false,
       showCartGetInfo:false, 
       inputCartName:'',
       inputName:'kalpesh',
       inputEmail:'abc@gmail.com',
       inputMobile:'1234567',
       data:{}
    }

  }

 
  createCard(){
    this.setState({
      showCreatCart: !this.state.showCreatCart
    }); 
  }

  closeCreateCart(){
    this.setState({
      showCreatCart: false,
      showCartGetInfo:false,
      inputCartName:'',
      inputName:'',
      inputEmail:'',
      inputMobile:''
    }); 

  }

  cancelCart(){
    this.setState({
      inputName:'',
      inputEmail:'',
      inputMobile:''
    }); 
  }

  saveCart(e){
    e.preventDefault();

    const data = {};

    data.cardname = this.state.inputCartName;
    data.name =  this.state.inputName;
    data.email =  this.state.inputEmail;
    data.mobile =  this.state.inputMobile;


    this.setState({
      data: data
    }, () => {
        this.props.setCartData(this.state.data);
    });

  }

  submit_name(){

    if(this.state.inputCartName !== '' ){
    
      this.setState({
        showCreatCart: false,
        showCartGetInfo:true
      });
      
    }else{
      alert("filing  the box")
    }
  }
  updateName(evt){

    this.setState({
      inputName: evt.target.value
    });
  }
  updateEmail(evt){
    this.setState({
      inputEmail: evt.target.value
    });
  }
  updateMobile(evt){
    this.setState({
      inputMobile: evt.target.value
    });
  }
  updateInputValue(evt) {
    this.setState({
      inputCartName: evt.target.value
    });
  }

  render() {


    return (
      <div className="App">

         <div className="buttion" onClick = { this.createCard.bind(this)}>
           <img src = { plusButton } alt="PlusButton"/>
         </div>

         <div className="container">

            <CardHoder />
            
         </div>
         
         { this.state.showCreatCart ? <div className="creatCart" >
           <div className="cartTopHeader">
           <p className="cart-name">Create name </p>
                <img src = { closeButton } className="close" onClick={this.closeCreateCart.bind(this)} alt="CloseButton"/>
           </div>

           <div  style={{ display:"inline-block" }}> <h5>Cart Name</h5>
           <input type="text" name="cart-name" value={this.state.inputCartName} className="cart-input-box" onChange={evt => this.updateInputValue(evt)}/>
           </div>
           <br/><br/> <br/>
           <button type="button" onClick={this.submit_name.bind(this)}>
             Creat Cart
           </button>

         </div> : null
        }

        {this.state.showCartGetInfo ?
           <div className="creatCart"  style={{height: '400px', width: '300px'}}>
              <div className="cartTopHeader">
                  <p className="cart-name">Cart :-  <span >{this.state.inputCartName}</span> </p>
                    <img src = {closeButton} className="close" onClick={this.closeCreateCart.bind(this)} alt="CloseButton"/>
              </div> 
              <br/><br/>
             <div>
                <input type="text" placeholder="Enter Name" value={this.state.inputName}  onChange={evt => this.updateName(evt)} />
             </div>         
             <br/><br/>
             <div>
                <input type="email" placeholder="Enter Email" value={this.state.inputEmail}  onChange={evt => this.updateEmail(evt)} />
             </div>   
             <br/><br/>
             <div>
                <input type="number" placeholder="Enter MoNumber" value={this.state.inputMobile}  onChange={evt => this.updateMobile(evt)} />
             </div>   
             <div>
             <br/><br/>
             <button type="button" onClick={this.saveCart.bind(this)}>
               Save
             </button>
             <span> &nbsp; &nbsp; &nbsp;</span>
             <button type="button" onClick={this.cancelCart.bind(this)}>
               Cancel 
             </button>

             </div>   
            
           </div>: null
        }

        


         

      </div>
    );
  }
}

function mapStateToProps(state){
  return {};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({setCartData: setCartData}, dispatch) ;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
