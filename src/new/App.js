import React from 'react'
import ClassCompo from './ClassCompo'
import MybtnFunc from './MybtnFunc'
import './style.css'

 const App = () => {
  return (
    <div className='mainDiv'>
                 <h1 className='mainHeading'>Syle using function and class components</h1>
                <div className='content'>
                <ClassCompo />
                <MybtnFunc />
                </div>

    </div>
  )
}

export default App