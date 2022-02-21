import React, {Component} from "react";
const Mybtn_css = {
    fontSize: '1.5rem',
    textAlign: 'center',
    width: '25vw',
    height: '10vh',
    color: 'white',
    backgroundColor: 'blue',
    borderRadius: '10px',
    alignItem: 'center',
    marginLeft: '10%'
}
const BlockDiv = {
    width: '35vw',
    height: '31vh',
    border: '2px solid red',
    backgroundColor: 'gray',
    textAlign: 'center',
    borderRadius: '21px',
    marginLeft: '45%',
    position: 'absolute',
    top: '40%'
    
}

class ClassBlock extends Component{

    state = {
        isFun: false,
        isClass: false
    };

    FuncCall (){
        console.log("first")
      const isFun = ! this.state.isFun;
      this.setState({ isFun })
    }
    render(){
        return(
         <>
         <button style={Mybtn_css} onClick={this.FuncCall.bind(this)}>for class component</button>
         {this.state.isFun && <div style={BlockDiv}>
        <h1 className='p1tag'>style using class component</h1>
        <p className='p2tag'>this is inline css</p>
        <p className='p3tag'>this is stylesheet</p>
    </div>}
         </>
        )
    }
}

export default ClassBlock