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

const text1 = {
    fontSize: '1.6rem',
    textAlign: 'center',
    color: 'gray'
}
const text2 = {
    fontSize: '1.2rem',
    textAlign: 'center',
    color: 'green'
}
const text3 = {
    fontSize: '1.3rem',
    textAlign: 'center',
     color: 'blue'
}
class ButtonClass extends Component{

    state={
        msg: "",
        msg1: "",
        rakesh: "",
        heading: ""
    }

    cHandler (){
        this.setState({msg: "this para using stylesheet", msg1:"this para using inline", rakesh:"keer", heading:"style using class component"})
    }
    
    HideDiv(){
        this.setState({msg: "",
        msg1: "",
        rakesh: "",
        heading: ""})
    }
    render(){
        return(
            <>
            <button style={Mybtn_css} onClick={this.cHandler.bind(this)} onDoubleClick={this.HideDiv.bind(this)}>button for classComponent</button>
            <div className={this.state.rakesh}>
                <p style={text1}>{this.state.heading}</p>
                <p style={text2}>{this.state.msg}</p>
                <p style={text3}>{this.state.msg1}</p>
            </div>
            </>
        )
    }
}

export  default ButtonClass



