import React from 'react';
import '../styles/Navbar.css';


const Navbar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Lista</a></li>
          <li><a href="#">horarios/direccion</a></li>
          <li><a href="#">Bootcamps</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar