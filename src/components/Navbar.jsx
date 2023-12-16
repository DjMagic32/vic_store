import React from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  return (
      <nav className='Navbar_container'>
        <ul>
          <li className='Navbar_Link'><a href="#">Inicio</a></li>
          <li className='Navbar_Link'><a href="#">Lista</a></li>
          <li className='Navbar_Link'><a href="#">horarios/direccion</a></li>
          <li className='Navbar_Link'><a href="#">Bootcamps</a></li>
          <li className='Navbar_Link'><a href="#">Contacto</a></li>
        </ul>
      </nav>    
  )
}

export default Navbar