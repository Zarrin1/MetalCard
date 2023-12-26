import React, { useState } from 'react';
import './Right.css'

function Right({username, pictures}) {

    const[color, setColor] = useState();
    


    const getColor = () => {
      if (color === 1) {
        return 'green'
      } else if (color === 2) {
        return 'yellow'
      } else if (color === 3){
        return 'black'
      }else if (color === 4){
        return 'gray' 
      }else if (color === 5){
        return 'red'
      }else if (color === 6){
        return 'blue'
      }else if (color === 7){
        return 'pink'
      }else if (color === 8){
        return 'purple'
      }
    }

      return (
      <div className='container'>
        <div className='colors'>
            <h2 className='choose'>Выбери цвет</h2>
            <div className='chooseColor'>
                <div className='color' style={{background: 'green'}} onClick={()=> setColor(1)}></div>
                <div className='color' style={{background: 'yellow'}} onClick={()=> setColor(2)}></div>
                <div className='color' style={{background: 'black'}} onClick={()=> setColor(3)}></div>
                <div className='color' style={{background: 'gray'}} onClick={()=> setColor(4)}></div>
                <div className='color' style={{background: 'red'}} onClick={()=> setColor(5)}></div>
                <div className='color' style={{background: 'blue'}} onClick={()=> setColor(6)}></div>
                <div className='color' style={{background: 'pink'}} onClick={()=> setColor(7)}></div>
                <div className='color' style={{background: 'purple'}} onClick={()=> setColor(8)}></div>
            </div>
            <div className='card' style={{background: getColor()}}>
                <span className='username'>
                  {username || 'Zarrin Davlatzoda'}
                </span>
            </div>
        </div>
      </div>
      
    )
  }
  
  export default Right