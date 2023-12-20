import React from 'react';
import imagen from './genz.png'
import '../styles/Header.css'

const Header = () => {
  return (
    <header className='Header_container'>
      <img src={imagen} alt="" className='imagen' />
      <p className='parrafo1'>Texto de ejemplo</p>
      <div className='header_div1'>
        <p className='parrafo2'>Texto de ejemplo 2</p> {/* Cambiar de "p" a "h3" */}
        <p className='lorenipsum'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit quam in neque volutpat consequat. Nulla non augue eget enim mattis semper. Nulla volutpat ligula et lobortis maximus. Nunc eget ex et felis mattis rutrum in et neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed pulvinar, diam sed tincidunt tempus, mi lacus posuere neque, at volutpat dui odio eu lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean rhoncus ante sit amet luctus bibendum. In hac habitasse platea dictumst. Nam metus neque, pharetra at lectus nec, dignissim feugiat lectus. Fusce finibus, magna vel finibus semper, nibh diam sagittis purus, at blandit risus erat eget enim. Sed nisl ex, volutpat id ipsum ac, posuere fermentum enim. Sed pellentesque lorem sed justo feugiat accumsan. Nam tempor, odio id commodo dignissim, ex lacus fringilla sem, sed iaculis elit dolor at leo. </p>
      </div>
      <div className='boton'>
        <button className='button'>UNLOCALIZED_STRING</button>
      </div>
    </header>
  )
}

export default Header