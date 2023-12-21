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

function Left() {
    const[value, setValue] = useState('')
  
    return (
      <div className='container'>
        <div className='name'>
            <h2 className='firstname'>Имя и Фамилия</h2>
            <input type="text" />
        </div>
        <div className='pictures'>
            <div className='carts'>
                <img className='cart' src={ten}/>
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
      
    )
  }
  
  export default Left