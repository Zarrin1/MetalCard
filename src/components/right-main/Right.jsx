import React, { useState } from 'react';
import './Right.css'

function Right() {

    const[value, setValue] = useState('');
  
    return (
      <div className='container'>
        <div className='colors'>
            <h2 className='choose'>Выбери цвет</h2>
            <div className='chooseColor'>
                <div className='color' style={{background: 'green'}}></div>
                <div className='color' style={{background: 'yellow'}}></div>
                <div className='color' style={{background: 'black'}}></div>
                <div className='color' style={{background: 'gray'}}></div>
                <div className='color' style={{background: 'red'}}></div>
                <div className='color' style={{background: 'blue'}}></div>
                <div className='color' style={{background: 'pink'}}></div>
                <div className='color' style={{background: 'purple'}}></div>
            </div>
            <div className='card'>
                <h2 className='fullName'>Davlatzoda Zarrin</h2>
            </div>
        </div>
      </div>
      
    )
  }
  
  export default Right