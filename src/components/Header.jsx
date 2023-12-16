import React from 'react';
import imagen from './genz.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
        <div className='Intel_Emblem'>
          <img src={imagen} alt="Intel" className='w10' />
        </div>
    </header>
  )
}

export default Header