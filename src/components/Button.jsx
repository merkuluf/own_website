import React from 'react'

import '../static/css/button.css'



function Button({text, image_path, onClick, id}) {
  return (
    <button id={id} onClick={onClick} className='main-button'>
        <img className='button-icon' src={image_path}></img>
        <p className='button-text'>{text}</p>
    </button>
  )
}

export default Button;