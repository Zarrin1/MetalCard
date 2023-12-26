import React, { useState } from 'react';
import './Left.css'
import ten from '../../assets/ten.png'
import second from '../../assets/second.png'
import third from '../../assets/third.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'
import seven from '../../assets/seven.png'
import eight from '../../assets/eight.png'
import nine from '../../assets/nine.png'
import Right from '../right-main/Right';

function Left() {
    const[username, setUsername] = useState('Zarrin Davlatzoda');
    const[pictures, setPicture ] = useState(null)

    
  
    return (
    <div className='containers'>
      <div className='container'>
        <div className='name'>
            <h2 className='firstname'>Имя и Фамилия</h2>
            <input type="text" value={username}  onChange={(evt) => {
                setUsername(evt.target.value)
            }}/>
        </div>
        <div className='pictures'>
            <div className='carts'>
                <img className='cart' src={ten} onClick={()=> setPicture(1)}/>
                <img className='cart middle' src={second}/>
                <img className='cart' src={third}/>
            </div>
            <div className='carts middles'>
                <img className='cart' src={four}/>
                <img className='cart middle' src={five}/>
                <img className='cart' src={six}/>
            </div>

            <div className='carts'>
                <img className='cart' src={seven}/>
                <img className='cart middle' src={eight}/>
                <img className='cart' src={nine}/>
            </div>
        </div>
      </div>
      <Right username={username} pictures={pictures}/>
      </div>
      
      
    )
  }
  
  export default Left