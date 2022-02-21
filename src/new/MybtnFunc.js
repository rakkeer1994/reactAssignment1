import React, { useState } from "react";
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
    backgroundColor: 'lightblue',
    textAlign: 'center',
    borderRadius: '21px',
    marginLeft: '100px',
    position: 'absolute',
    top: '40%'
    
}
const MybtnFunc = () =>{
     const [show, setShow] = useState(false) 
     
    return (
        <>
        <button style={Mybtn_css} onClick={()=>setShow(!show)}>button for FunctionComponent</button> 
        {
           show?<><div style={BlockDiv} >
            <h1 className="p1tag">style using functional component</h1>
            <p className="p2tag">this para using inline css</p>
            <p className="p3tag">this para using stylesheet</p>
             </div> </>: null
             
        }    
        </>
    )
}

export default MybtnFunc