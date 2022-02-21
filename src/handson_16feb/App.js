import React from "react";
import {Heading} from './Heading';
import {MybtnFunc} from './button';
import ButtonClass from "./Button_class";
import './Stylesheet.css'

 const App = () => {
    return (
     <>
        <div className="mainDiv">
            <Heading />

             <div>
             <MybtnFunc />
             <ButtonClass />
             </div>
        </div>
     </>
    )
}

export default App;